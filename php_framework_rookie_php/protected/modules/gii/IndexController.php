<?php defined('ROOKIE') or die('No direct script access.');
/**
 * 首页
 * @author shendegang
 *
 */
class IndexController extends controller 
{
	public static $db;
	
	/**
	 * 生成model
	 */
	public function index()
	{
		$a = Rookie_Core::app('db')->sql();
		$query = $a->query("SHOW TABLES");
		print_r($a->fetchRow($query));die;
		print_r($a->fetchRow("SHOW TABLES"));
		die;
		while($row = Rookie_Core::db()->fetchRow("SHOW TABLES"))
		{
			print_r($row);
		}
		
		
		die;
		//print_r($aa);die;
		$data = array();
		Rookie_Template::view('index', $data);
	}
}