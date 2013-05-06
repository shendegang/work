<?php
return array(
	'base' => array(
		'exception'		 => true,		
		'isDebug'	     => true,    
		'profiling' 		 => true,		
		'isRunStatic' 	 => true,		
		'smarty'	 		 => true,		
		'isCli'			 => false,		
		'isWindows' 		 => true,		
		'safeMode' 		 => true,		
		'log' 			 => false,			
		'contentType' 	 => 'text/html',	
		'charset'		 => 'utf-8',		
		'errors' 		 => true,			
		'shutdownErrors' => true, 		
		'magicQuotes' 	 => true,			
	),
	
	'import' => array(
		'components/*',
	),
	
	'memcache' => array(
	
	),
	
	//cache file
	'cacheFile' => array(
		'className' => 'Rookie_Cache_File',
		'param'		=> array()
	),
	
	'cacheApc' => array(
		'className' => 'Rookie_Cache_Apc',
		'param'		=> array()
	),
	
	/**
	'cacheMem' => array(
		'className' => 'Rookie_Cache_Mem',
		'param'		=>  array(
			  array('192.168.1.106', 12001, 50),
			  array('192.168.1.106', 12002, 50),
		),
	),
	**/
	'reids' => array(
		'className' => 'Rookie_Cache_Redis',
		'param'		=> array(
			array('127.0.0.1', 6379, 'weight' => 50 )
		),
	),
		
	'cacheFileArray' => array(
		'className' => 'Rookie_Cache_Php',
		'param' 	=> array(),			
	),

		
	'testDb' => array(
		'className'  => 'Rookie_Db_Conn',
		'param'		 => array(
			'dev'	 => array('localhost', 'm1', 'root', '', 'mysql', true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
		),
	),
		
	//连接mongodb	
	'mongodb' => array(
		'className' => 'Rookie_Mongodb',
		'param' 	=> require 'mongodb.php'
	),
	
	//css服务器
	'cssServer' => array(
		'list'  => array(
			array('name' => 'http://css1.rookie.com', 'weight' => 30),	
			array('name' => 'http://css2.rookie.com', 'weight' =>30),
			array('name' => 'http://css3.rookie.com', 'weight' =>30),
		)	
	),

	//js服务器
	'jsServer' => array(
		'list'  => array(
			array('name' => 'http://js1.rookie.com', 'weight' => 30),
			array('name' => 'http://js2.rookie.com', 'weight' =>30),
		)
	),
		
	//重数据库连接
	'db' => array(
		'className'  => 'Rookie_Db_Conn',
		'param'		 => array(
			'dev'	 => array('localhost', 'm1', 'root', '', 'mysql', true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
//			'master' => array('localhost', 'm1', 'root', '', 'mysql', true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 			'slave'  => array(
// 				//array('localhost', 'shop', 'root', '', 'mysql', true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 				//array('localhost', 'shop', 'root', '', 'mysql', true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 				//array('localhost', 'shop', 'root', '', 'mysql',true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 				//array('localhost', 'shop', 'root', '', 'mysql',true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 				//array('localhost', 'shop', 'root', '', 'mysql',true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 				array('localhosst', 's1', 'root', '', 'mysql',true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 				array('localhost', 's2', 'root', '', 'mysql',true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 				array('localhost', 's3', 'root', '', 'mysql',true, 'collate'=>'utf8_unicode_ci', 'charset'=>'utf8'),
// 			),
		),
	),
);
