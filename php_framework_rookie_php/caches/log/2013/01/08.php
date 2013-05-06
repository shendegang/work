<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-01-08 13:11:01 --- ERROR: ErrorException [ 2 ]: Division by zero ~ E:\web_free\myframwork\protected\modules\default\IndexController.php [ 22 ]
2013-01-08 13:11:01 --- STRACE: ErrorException [ 2 ]: Division by zero ~ E:\web_free\myframwork\protected\modules\default\IndexController.php [ 22 ]
--
#0 E:\web_free\myframwork\protected\modules\default\IndexController.php(22): Rookie_Debug::error_handler(2, 'Division by zer...', 'E:\web_free\myf...', 22, Array)
#1 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#2 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#3 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#4 {main}