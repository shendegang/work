<?php
/**
 * 附件服务器
 * @author shendegang
 */
class attServer
{
	/**
	 * 获取css路径
	 */
	public static function css()
	{
		$cssConfig = self::weight(Rookie_Core::$webConfig['cssServer']['list']);
		return $cssConfig['name'];
	}
	
	/**
	 * 获取js路径
	 */
	public static function js()
	{
		$jsConfig = self::weight(Rookie_Core::$webConfig['jsServer']['list']);
		return $jsConfig['name'];
	}
	
	/**
	 * 权重记算
	 * @param  array  $config 
	 * @return array  $tempdata
	 */
	public static function weight( $config = array())
	{
		$weight = 0;
		$tempdata = array ();
		foreach ( $config as $one ) {
			$weight += $one ['weight'];
			
			for($i = 0; $i < $one ['weight']; $i ++)
				$tempdata [] = $one;
		}
		
		$use = rand ( 0, $weight - 1 );
		$one = $tempdata [$use];
		return $one;
	}
}