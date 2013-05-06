<?php
$route['*']['/'] = array('IndexController', 'index', 'm' => 'default');
$route['*']['/login'] = array('LoginController', 'login', 'm' => 'member');
$route['*']['/reg'] = array('LoginController', 'reg', 'm' => 'member');
$route['*']['/manage.do'] = array('TestController', 'index', 'm' => 'default');
?>