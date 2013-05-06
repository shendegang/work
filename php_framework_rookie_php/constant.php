<?php
define('ROOKIE', TRUE);

// 定义应用程序内存分析使用情况
! defined('ROOKIE_START_MEMORY') && define('ROOKIE_START_MEMORY', memory_get_usage());

define("DS", DIRECTORY_SEPARATOR);
define("__VERSION__", "0.0.1");
define("nil", "nil_" . uniqid(microtime(true)));

//merge $_POST and $_GET
$GLOBALS["ROCK_USER_VARS"] = array();
$GLOBALS["ROCK_HTTP_VARS"] = array_merge($_GET, $_POST);

// 设置默认时区
date_default_timezone_set('Etc/GMT-8');

// WEB路径
define('WEBPATH', realpath(dirname(__FILE__)).DS);

// 系统类路径
define('SYSPATH', WEBPATH.'framework'.DS);

//配置文件路径
define('CONFIGPATH', WEBPATH.'protected'.DS.'config'.DS);

//主机协议
define('SITEPROTOCOL', isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://'); //主机协议

//WEB地址
@define('WEBURL', SITEPROTOCOL . $_SERVER['HTTP_HOST'] . "/");

//日志
define('LOGPATH', WEBPATH.'caches/log'.DS);

//缓存
define('CACHEPATH', WEBPATH.'caches'.DS);

// 错误级别
error_reporting(E_ALL | E_STRICT);

//输出页面字符集
define('CHARSET' , 'utf-8'); 

//系统开始时间
define('SYS_START_TIME', microtime());

//系统时间
define('SYS_TIME', time());

//每页显示的条数
define("PAGE", 7);

/* 验证码 */
define('CAPTCHA_REGISTER',          1); //注册时使用验证码
define('CAPTCHA_LOGIN',             2); //登录时使用验证码
define('CAPTCHA_COMMENT',           4); //评论时使用验证码
define('CAPTCHA_ADMIN',             8); //后台登录时使用验证码
define('CAPTCHA_LOGIN_FAIL',       16); //登录失败后显示验证码
define('CAPTCHA_MESSAGE',          32); //留言时使用验证码