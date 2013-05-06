<?php	defined('ROOKIE') or die('No direct script access.');
/**
 * Rookie核心类
 * 
 * @category   Base
 * @author     shendegang
 * @copyright  (c) 2011-2015 shendegang
 * @license    http://blog.163.com/php_java/ 
 *
 */
class Rookie_Core 
{
	/**
	 * @var mixed $log 日志
	 */
	public static $log;
	
	public static $magic_quotes;
	/**
	 * @var array $config 系统配置文件
	 */
	public static $config = array();
	
	/**
	 * @var array $webConfig 网站的配置文件
	 */
	public static $webConfig = array();
	
	/**
	 * @var string $_init 是否初始化
	 */
	protected static $_init = FALSE;
	
	/**
	 * @var array $_paths 包括查询文件路径
	 */
	protected static $_paths = array();
	
	/**
	 * @var object $_db 数据库对象
	 */
	public static $_db;
	
	/**
	 * @var string $_useDbReplicate 是否启用主重数据策略
	 */
	public static $_useDbReplicate = null;
	
	/**
	 * 框架初始化
	 * @param  array $config
	 * @return mixed
	 */
	public static function init($config)
	{	
		if (self::$_init)
			return;
			
		self::$config = $config['base'];
		self::$webConfig = $config;
		
		// Rookie是现在初始化
		Rookie_Core::$_init = true;

		// 开始输出缓冲区
		ob_start();

		//错误信息是否显示
        if(!self::$config['errors'])
             error_reporting(0);
        else
        {
            ini_set('display_errors','On');
            error_reporting(E_ALL ^ E_NOTICE );
        }

		//是否开启异常处理
		if (self::$config['exception'])
		{
			self::$config['isDebug'] = (bool) self::$config['exception'];
			
			//加入异常及错误信息处理类
			set_exception_handler(array('Rookie_Exception', 'handler'));
			set_error_handler(array('Rookie_Debug', 'error_handler'));			
		}
		
		// 启用rookie的关机处理程序，它捕获E_FATAL的错误。
		register_shutdown_function(array('Rookie_core', 'shutdownHandler'));

		//反向register_globals的影响
		ini_get('register_globals') && Rookie_Core::globals();

		// 确定如果我们在运行的命令行环境
		self::$config['isCli'] = (PHP_SAPI === 'cli');

		// 确定我们是否在安全模式下运行
		self::$config['safeMode'] = (bool) ini_get('safe_mode');
		
		//设置程序运行时间 
		(function_exists("set_time_limit") == TRUE AND @ini_get("safe_mode") == 0) &&
			@set_time_limit(300);
	
		//是否注册全局变量 
		ini_get('register_globals') && Rookie_Core::globals();
		
		// MB扩展编码设置相同的字符集
		function_exists('mb_internal_encoding') && mb_internal_encoding(CHARSET);
		
		// 载入记录
		if (self::$config['profiling'])
			self::$log = Rookie_Log::instance();
		
		//加载用户自定义类
		self::import();
	}
	
	/**
	 * 调用类函数
	 */
	public static function app($className)
	{
		$moduleRunner = new ModuleRunner();
		return $moduleRunner->init(self::$webConfig[$className]);
	}
	
	/**
	 * 查询文件是否存在
	 * @param String $path
	 * @param String $file_name
	 * @param String $real_path; 
	 */
	public static function findFile($path, $file_name, $ext = '.php')
	{
		$file_name = strtolower($file_name);
		
		$real_path = SYSPATH.$path.DS.$file_name.$ext;
		
		if (file_exists($real_path))
		{
			//判断是否已经加载
			if ( ! in_array($file_name, self::$_paths))
				self::$_paths[] = $file_name;

			return $real_path;
		}
		
		return FALSE;
	}
	
	/**
	 * 自动加载类
	 * @param  string $class
	 * @return miexd
	 */
	public static function autoLoad($class)
	{
		$class = str_replace('Rookie_', '', $class);
		$class_new = $class;
		
		if (strstr($class, "_"))
		{
			$class = preg_replace("/^([a-zA-Z]+)_([a-zA-Z]+)/", "\$1", $class);
			$class_name = $class_new;
		}
			
		$class_name = ($class_new === $class ? $class : $class_name);
		
		try 
		{
			($path = Rookie_Core::findFile('classes', $class.'/'.$class_name)) || $path = false;
			$path && require $path;
			
			return $path ? TRUE : FALSE;
				
		}
		catch (Exception $e)
		{
			exit(Rookie_Exception::handler($e));
		}
		
	}
	
	/**
	 * 过滤不安全因素
	 * @return  void
	 */
	public static function globals()
	{
		if (isset($_REQUEST['GLOBALS']) OR isset($_FILES['GLOBALS']))
		{
			// 防止恶意GLOBALS过载攻击
			echo "Global variable overload attack detected! Request aborted.\n";

			// 用一个错误的状态退出
			exit(1);
		}

		// 获取所有的全局变量名
		$global_variables = array_keys($GLOBALS);

		// 从列表中删除标准的全局变量
		$global_variables = array_diff($global_variables, array(
			'_COOKIE',
			'_ENV',
			'_GET',
			'_FILES',
			'_POST',
			'_REQUEST',
			'_SERVER',
			'_SESSION',
			'GLOBALS',
		));

		// 取消设置的全局变量，有效register_globals的关闭
		foreach ($global_variables as $name)
			unset($GLOBALS[$name]);
	}
	
	/**
	 * 递归清理输入变量：
	 *
	 * - 如果启用魔术引号条斜线
     * - 标准化所有换行符为LF
	 *
	 * @param   mixed  any variable
	 * @return  mixed  sanitized variable
	 */
	public static function sanitize($value)
	{
		if (is_array($value) OR is_object($value))
		{
			foreach ($value as $key => $val)
			{
				// 递归清理每个值
				$value[$key] = self::sanitize($val);
			}
		}
		elseif (is_string($value))
		{
			if (self::$magic_quotes === TRUE)
			{
				// 魔术引号删除添加的斜线
				$value = stripslashes($value);
			}

			if (strpos($value, "\r") !== FALSE)
			{
				// 标准化换行符
				$value = str_replace(array("\r\n", "\r"), "\n", $value);
			}
		}

		return $value;
	}
	
	/**
	 * 捕获没有陷入错误处理程序，如E_PARSE的的错误。
	 *
	 * @uses    Kohana_Exception::handler
	 * @return  void
	 */
	public static function shutdownHandler()
	{
		if ( ! self::$_init)
			return;

		if (self::$config['errors'] AND $error = error_get_last() AND in_array($error['type'], self::$config['shutdownErrors']))
		{
			// 清洁的输出缓冲区
			ob_get_level() and ob_clean();

			// 假异常很好的调试
			Rookie_Exception::handler(new ErrorException($error['message'], $error['type'], 0, $error['file'], $error['line']));

			// 现在关机，以避免“死亡循环”
			exit(1);
		}
	}
	
	/**
     * 指定页面的状态
     * @param unknown_type $status
     */
    public static function headerStatus($status)
    {
       if (substr(php_sapi_name(), 0, 3) == 'cgi')
           header('Status: '.$status, TRUE);
       else
           header($_SERVER['SERVER_PROTOCOL'].' '.$status);
    }
    
	
}

?>
