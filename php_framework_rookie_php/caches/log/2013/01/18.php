<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-01-18 15:10:53 --- ERROR: ErrorException [ 2 ]: Division by zero ~ E:\web_free\myframwork\protected\modules\default\IndexController.php [ 22 ]
2013-01-18 15:10:53 --- STRACE: ErrorException [ 2 ]: Division by zero ~ E:\web_free\myframwork\protected\modules\default\IndexController.php [ 22 ]
--
#0 E:\web_free\myframwork\protected\modules\default\IndexController.php(22): Rookie_Debug::error_handler(2, 'Division by zer...', 'E:\web_free\myf...', 22, Array)
#1 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#2 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#3 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#4 {main}
2013-01-18 15:48:52 --- ERROR: Rookie_Exception [ 0 ]: Unknown modules tye:Rookie_Mongdb ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 40 ]
2013-01-18 15:48:52 --- STRACE: Rookie_Exception [ 0 ]: Unknown modules tye:Rookie_Mongdb ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 40 ]
--
#0 E:\web_free\myframwork\framework\classes\Rookie.php(127): ModuleRunner->init(Array)
#1 E:\web_free\myframwork\protected\modules\default\IndexController.php(12): Rookie_Core::app('mongdb')
#2 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#3 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#4 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#5 {main}
2013-01-18 15:51:28 --- ERROR: Rookie_Exception [ 0 ]: Unknown modules tye:Rookie_Mongdb ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 40 ]
2013-01-18 15:51:28 --- STRACE: Rookie_Exception [ 0 ]: Unknown modules tye:Rookie_Mongdb ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 40 ]
--
#0 E:\web_free\myframwork\framework\classes\Rookie.php(127): ModuleRunner->init(Array)
#1 E:\web_free\myframwork\protected\modules\default\IndexController.php(12): Rookie_Core::app('mongdb')
#2 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#3 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#4 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#5 {main}
2013-01-18 15:56:11 --- ERROR: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
2013-01-18 15:56:11 --- STRACE: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
--
#0 E:\web_free\myframwork\framework\classes\app\Module.php(36): ReflectionClass->__construct('Rookie_Mongdb')
#1 E:\web_free\myframwork\framework\classes\Rookie.php(127): ModuleRunner->init(Array)
#2 E:\web_free\myframwork\protected\modules\default\IndexController.php(12): Rookie_Core::app('mongdb')
#3 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#4 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#5 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#6 {main}
2013-01-18 15:56:13 --- ERROR: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
2013-01-18 15:56:13 --- STRACE: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
--
#0 E:\web_free\myframwork\framework\classes\app\Module.php(36): ReflectionClass->__construct('Rookie_Mongdb')
#1 E:\web_free\myframwork\framework\classes\Rookie.php(127): ModuleRunner->init(Array)
#2 E:\web_free\myframwork\protected\modules\default\IndexController.php(12): Rookie_Core::app('mongdb')
#3 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#4 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#5 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#6 {main}
2013-01-18 15:56:13 --- ERROR: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
2013-01-18 15:56:13 --- STRACE: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
--
#0 E:\web_free\myframwork\framework\classes\app\Module.php(36): ReflectionClass->__construct('Rookie_Mongdb')
#1 E:\web_free\myframwork\framework\classes\Rookie.php(127): ModuleRunner->init(Array)
#2 E:\web_free\myframwork\protected\modules\default\IndexController.php(12): Rookie_Core::app('mongdb')
#3 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#4 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#5 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#6 {main}
2013-01-18 15:56:13 --- ERROR: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
2013-01-18 15:56:13 --- STRACE: ReflectionException [ -1 ]: Class Rookie_Mongdb does not exist ~ E:\web_free\myframwork\framework\classes\app\Module.php [ 36 ]
--
#0 E:\web_free\myframwork\framework\classes\app\Module.php(36): ReflectionClass->__construct('Rookie_Mongdb')
#1 E:\web_free\myframwork\framework\classes\Rookie.php(127): ModuleRunner->init(Array)
#2 E:\web_free\myframwork\protected\modules\default\IndexController.php(12): Rookie_Core::app('mongdb')
#3 E:\web_free\myframwork\framework\classes\uri\uri.php(123): IndexController->index()
#4 E:\web_free\myframwork\framework\classes\uri\uri.php(38): Rookie_Uri::routeTo()
#5 E:\web_free\myframwork\index.php(60): Rookie_Uri::run()
#6 {main}