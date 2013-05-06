<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-03-27 16:00:07 --- ERROR: ErrorException [ 8 ]: Undefined variable: hostIndex ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 41 ]
2013-03-27 16:00:07 --- STRACE: ErrorException [ 8 ]: Undefined variable: hostIndex ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 41 ]
--
#0 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(41): Rookie_Debug::error_handler(8, 'Undefined varia...', '/usr/web/test/m...', 41, Array)
#1 [internal function]: Rookie_Mongodb->setInit(1)
#2 /usr/web/test/myFramwork/framework/classes/app/Module.php(73): ReflectionMethod->invoke(Object(Rookie_Mongodb), 1)
#3 /usr/web/test/myFramwork/framework/classes/app/Module.php(44): ModuleRunner->handleMethod(Object(Rookie_Mongodb), Object(ReflectionMethod), Array)
#4 /usr/web/test/myFramwork/framework/classes/Rookie.php(115): ModuleRunner->init(Array)
#5 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Core::app('mongodb')
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#7 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#8 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#9 {main}
2013-03-27 16:00:09 --- ERROR: ErrorException [ 8 ]: Undefined variable: hostIndex ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 41 ]
2013-03-27 16:00:09 --- STRACE: ErrorException [ 8 ]: Undefined variable: hostIndex ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 41 ]
--
#0 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(41): Rookie_Debug::error_handler(8, 'Undefined varia...', '/usr/web/test/m...', 41, Array)
#1 [internal function]: Rookie_Mongodb->setInit(1)
#2 /usr/web/test/myFramwork/framework/classes/app/Module.php(73): ReflectionMethod->invoke(Object(Rookie_Mongodb), 1)
#3 /usr/web/test/myFramwork/framework/classes/app/Module.php(44): ModuleRunner->handleMethod(Object(Rookie_Mongodb), Object(ReflectionMethod), Array)
#4 /usr/web/test/myFramwork/framework/classes/Rookie.php(115): ModuleRunner->init(Array)
#5 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Core::app('mongodb')
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#7 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#8 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#9 {main}
2013-03-27 16:00:46 --- ERROR: ErrorException [ 8 ]: Undefined variable: hostIndex ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 41 ]
2013-03-27 16:00:46 --- STRACE: ErrorException [ 8 ]: Undefined variable: hostIndex ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 41 ]
--
#0 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(41): Rookie_Debug::error_handler(8, 'Undefined varia...', '/usr/web/test/m...', 41, Array)
#1 [internal function]: Rookie_Mongodb->setInit(1)
#2 /usr/web/test/myFramwork/framework/classes/app/Module.php(73): ReflectionMethod->invoke(Object(Rookie_Mongodb), 1)
#3 /usr/web/test/myFramwork/framework/classes/app/Module.php(44): ModuleRunner->handleMethod(Object(Rookie_Mongodb), Object(ReflectionMethod), Array)
#4 /usr/web/test/myFramwork/framework/classes/Rookie.php(115): ModuleRunner->init(Array)
#5 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Core::app('mongodb')
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#7 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#8 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#9 {main}
2013-03-27 16:03:50 --- ERROR: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$mongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:03:50 --- STRACE: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$mongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(8, 'Undefined prope...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:04:16 --- ERROR: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$getMongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:04:16 --- STRACE: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$getMongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(8, 'Undefined prope...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:04:16 --- ERROR: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$getMongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:04:16 --- STRACE: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$getMongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(8, 'Undefined prope...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:04:17 --- ERROR: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$getMongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:04:17 --- STRACE: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$getMongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(8, 'Undefined prope...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:04:35 --- ERROR: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$mongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:04:35 --- STRACE: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$mongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(8, 'Undefined prope...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:06:22 --- ERROR: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:06:22 --- STRACE: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(2048, 'Accessing stati...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:06:41 --- ERROR: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:06:41 --- STRACE: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(2048, 'Accessing stati...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:06:42 --- ERROR: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:06:42 --- STRACE: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(2048, 'Accessing stati...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:06:42 --- ERROR: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:06:42 --- STRACE: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(2048, 'Accessing stati...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:06:42 --- ERROR: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:06:42 --- STRACE: ErrorException [ 2048 ]: Accessing static property Rookie_Mongodb::$mongo as non static ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(2048, 'Accessing stati...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-27 16:07:38 --- ERROR: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$mongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
2013-03-27 16:07:38 --- STRACE: ErrorException [ 8 ]: Undefined property: Rookie_Mongodb::$mongo ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 13 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): Rookie_Debug::error_handler(8, 'Undefined prope...', '/usr/web/test/m...', 13, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}