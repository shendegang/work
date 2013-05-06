<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-03-29 11:16:51 --- ERROR: ErrorException [ 2 ]: include_once(model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 11:16:51 --- STRACE: ErrorException [ 2 ]: include_once(model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(2, 'include_once(mo...', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): IndexController::index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 11:17:16 --- ERROR: ErrorException [ 2 ]: include_once(../model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 11:17:16 --- STRACE: ErrorException [ 2 ]: include_once(../model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(2, 'include_once(.....', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): IndexController::index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 11:17:18 --- ERROR: ErrorException [ 2 ]: include_once(../model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 11:17:18 --- STRACE: ErrorException [ 2 ]: include_once(../model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(2, 'include_once(.....', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): IndexController::index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 11:17:22 --- ERROR: ErrorException [ 2 ]: include_once(./../model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 11:17:22 --- STRACE: ErrorException [ 2 ]: include_once(./../model/TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(2, 'include_once(./...', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): IndexController::index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 11:17:40 --- ERROR: ErrorException [ 2 ]: include_once(model/..//TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 11:17:40 --- STRACE: ErrorException [ 2 ]: include_once(model/..//TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(2, 'include_once(mo...', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): IndexController::index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 11:17:47 --- ERROR: ErrorException [ 2 ]: include_once(./model/../TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 11:17:47 --- STRACE: ErrorException [ 2 ]: include_once(./model/../TestModel.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(2, 'include_once(./...', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): IndexController::index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 11:21:41 --- ERROR: ErrorException [ 8 ]: Use of undefined constant _mongoAuth - assumed '_mongoAuth' ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongo/MServer.php [ 235 ]
2013-03-29 11:21:41 --- STRACE: ErrorException [ 8 ]: Use of undefined constant _mongoAuth - assumed '_mongoAuth' ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongo/MServer.php [ 235 ]
--
#0 /usr/web/test/myFramwork/framework/classes/mongodb/mongo/MServer.php(235): Rookie_Debug::error_handler(8, 'Use of undefine...', '/usr/web/test/m...', 235, Array)
#1 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(41): MServer->auth('admin', 'admin')
#2 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(19): Rookie_Mongodb->setInit()
#3 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#6 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#7 {main}
2013-03-29 11:24:12 --- ERROR: ErrorException [ 8 ]: Undefined variable: MONGO ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 39 ]
2013-03-29 11:24:12 --- STRACE: ErrorException [ 8 ]: Undefined variable: MONGO ~ /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php [ 39 ]
--
#0 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(39): Rookie_Debug::error_handler(8, 'Undefined varia...', '/usr/web/test/m...', 39, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(19): Rookie_Mongodb->setInit()
#2 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#6 {main}
2013-03-29 15:04:49 --- ERROR: ErrorException [ 2 ]: array_diff_key(): Argument #1 is not an array ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 309 ]
2013-03-29 15:04:49 --- STRACE: ErrorException [ 2 ]: array_diff_key(): Argument #1 is not an array ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 309 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'array_diff_key(...', '/usr/web/test/m...', 309, Array)
#1 /usr/web/test/myFramwork/framework/classes/helper/validator.php(309): array_diff_key(NULL, Array)
#2 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(75): DooValidator->validate(Array)
#3 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(28): Rookie_Mongodb->validate()
#4 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#7 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#8 {main}
2013-03-29 15:07:08 --- ERROR: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testid' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
2013-03-29 15:07:08 --- STRACE: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testid' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'call_user_func_...', '/usr/web/test/m...', 388, Array)
#1 /usr/web/test/myFramwork/framework/classes/helper/validator.php(388): call_user_func_array(Array, Array)
#2 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(78): DooValidator->validate(Array, Array)
#3 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(29): Rookie_Mongodb->validate()
#4 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#7 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#8 {main}
2013-03-29 15:07:25 --- ERROR: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testid' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
2013-03-29 15:07:25 --- STRACE: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testid' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'call_user_func_...', '/usr/web/test/m...', 388, Array)
#1 /usr/web/test/myFramwork/framework/classes/helper/validator.php(388): call_user_func_array(Array, Array)
#2 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(78): DooValidator->validate(Array, Array)
#3 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(29): Rookie_Mongodb->validate()
#4 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#7 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#8 {main}
2013-03-29 15:07:54 --- ERROR: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
2013-03-29 15:07:54 --- STRACE: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'call_user_func_...', '/usr/web/test/m...', 388, Array)
#1 /usr/web/test/myFramwork/framework/classes/helper/validator.php(388): call_user_func_array(Array, Array)
#2 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(78): DooValidator->validate(Array, Array)
#3 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(29): Rookie_Mongodb->validate()
#4 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#7 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#8 {main}
2013-03-29 15:08:01 --- ERROR: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
2013-03-29 15:08:01 --- STRACE: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'call_user_func_...', '/usr/web/test/m...', 388, Array)
#1 /usr/web/test/myFramwork/framework/classes/helper/validator.php(388): call_user_func_array(Array, Array)
#2 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(78): DooValidator->validate(Array, Array)
#3 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(29): Rookie_Mongodb->validate()
#4 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#7 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#8 {main}
2013-03-29 15:08:01 --- ERROR: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
2013-03-29 15:08:01 --- STRACE: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'call_user_func_...', '/usr/web/test/m...', 388, Array)
#1 /usr/web/test/myFramwork/framework/classes/helper/validator.php(388): call_user_func_array(Array, Array)
#2 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(78): DooValidator->validate(Array, Array)
#3 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(29): Rookie_Mongodb->validate()
#4 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#7 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#8 {main}
2013-03-29 15:16:55 --- ERROR: ErrorException [ 8 ]: Undefined variable: rule ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 30 ]
2013-03-29 15:16:55 --- STRACE: ErrorException [ 8 ]: Undefined variable: rule ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 30 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(30): Rookie_Debug::error_handler(8, 'Undefined varia...', '/usr/web/test/m...', 30, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 15:18:08 --- ERROR: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
2013-03-29 15:18:08 --- STRACE: ErrorException [ 2 ]: call_user_func_array() expects parameter 1 to be a valid callback, class 'DooValidator' does not have a method 'testnum' ~ /usr/web/test/myFramwork/framework/classes/helper/validator.php [ 388 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'call_user_func_...', '/usr/web/test/m...', 388, Array)
#1 /usr/web/test/myFramwork/framework/classes/helper/validator.php(388): call_user_func_array(Array, Array)
#2 /usr/web/test/myFramwork/framework/classes/mongodb/mongodb.php(75): DooValidator->validate(Array, Array)
#3 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(30): Rookie_Mongodb->validate(Array)
#4 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#5 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#6 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#7 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#8 {main}
2013-03-29 15:42:09 --- ERROR: ErrorException [ 2 ]: Division by zero ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 18 ]
2013-03-29 15:42:09 --- STRACE: ErrorException [ 2 ]: Division by zero ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 18 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(18): Rookie_Debug::error_handler(2, 'Division by zer...', '/usr/web/test/m...', 18, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(13): TestModel->__construct()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 15:44:01 --- ERROR: ErrorException [ 2 ]: opendir(/usr/web/test/myFramwork/protected/components大/): failed to open dir: No such file or directory ~ /usr/web/test/myFramwork/framework/classes/Rookie.php [ 428 ]
2013-03-29 15:44:01 --- STRACE: ErrorException [ 2 ]: opendir(/usr/web/test/myFramwork/protected/components大/): failed to open dir: No such file or directory ~ /usr/web/test/myFramwork/framework/classes/Rookie.php [ 428 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'opendir(/usr/we...', '/usr/web/test/m...', 428, Array)
#1 /usr/web/test/myFramwork/framework/classes/Rookie.php(428): opendir('/usr/web/test/m...')
#2 /usr/web/test/myFramwork/framework/classes/Rookie.php(109): Rookie_Core::import()
#3 /usr/web/test/myFramwork/index.php(32): Rookie_Core::init(Array)
#4 {main}
2013-03-29 15:44:01 --- ERROR: ErrorException [ 2 ]: opendir(/usr/web/test/myFramwork/protected/components大/): failed to open dir: No such file or directory ~ /usr/web/test/myFramwork/framework/classes/Rookie.php [ 428 ]
2013-03-29 15:44:01 --- STRACE: ErrorException [ 2 ]: opendir(/usr/web/test/myFramwork/protected/components大/): failed to open dir: No such file or directory ~ /usr/web/test/myFramwork/framework/classes/Rookie.php [ 428 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'opendir(/usr/we...', '/usr/web/test/m...', 428, Array)
#1 /usr/web/test/myFramwork/framework/classes/Rookie.php(428): opendir('/usr/web/test/m...')
#2 /usr/web/test/myFramwork/framework/classes/Rookie.php(109): Rookie_Core::import()
#3 /usr/web/test/myFramwork/index.php(32): Rookie_Core::init(Array)
#4 {main}
2013-03-29 16:48:13 --- ERROR: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
2013-03-29 16:48:13 --- STRACE: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'geoip_record_by...', '/usr/web/test/m...', 27, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(27): geoip_record_by_name('www.baidu.com')
#2 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#6 {main}
2013-03-29 16:49:18 --- ERROR: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
2013-03-29 16:49:18 --- STRACE: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'geoip_record_by...', '/usr/web/test/m...', 27, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(27): geoip_record_by_name('www.baidu.com')
#2 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#6 {main}
2013-03-29 16:49:19 --- ERROR: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
2013-03-29 16:49:19 --- STRACE: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'geoip_record_by...', '/usr/web/test/m...', 27, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(27): geoip_record_by_name('www.baidu.com')
#2 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#6 {main}
2013-03-29 16:49:20 --- ERROR: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
2013-03-29 16:49:20 --- STRACE: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'geoip_record_by...', '/usr/web/test/m...', 27, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(27): geoip_record_by_name('www.baidu.com')
#2 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#6 {main}
2013-03-29 16:49:20 --- ERROR: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
2013-03-29 16:49:20 --- STRACE: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'geoip_record_by...', '/usr/web/test/m...', 27, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(27): geoip_record_by_name('www.baidu.com')
#2 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#6 {main}
2013-03-29 16:49:20 --- ERROR: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
2013-03-29 16:49:20 --- STRACE: ErrorException [ 2 ]: geoip_record_by_name(): Required database not available at /opt/local/share/GeoIP/GeoIPCity.dat. ~ /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php [ 27 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'geoip_record_by...', '/usr/web/test/m...', 27, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/model/TestModel.php(27): geoip_record_by_name('www.baidu.com')
#2 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(14): TestModel->test()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#4 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#6 {main}
2013-03-29 18:10:20 --- ERROR: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
2013-03-29 18:10:20 --- STRACE: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
--
#0 /usr/web/test/myFramwork/framework/classes/controller/controller.php(662): Rookie_Debug::error_handler(2, 'Missing argumen...', '/usr/web/test/m...', 662, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): x()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 18:11:17 --- ERROR: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
2013-03-29 18:11:17 --- STRACE: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
--
#0 /usr/web/test/myFramwork/framework/classes/controller/controller.php(662): Rookie_Debug::error_handler(2, 'Missing argumen...', '/usr/web/test/m...', 662, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): x()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 18:11:18 --- ERROR: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
2013-03-29 18:11:18 --- STRACE: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
--
#0 /usr/web/test/myFramwork/framework/classes/controller/controller.php(662): Rookie_Debug::error_handler(2, 'Missing argumen...', '/usr/web/test/m...', 662, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): x()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 18:11:19 --- ERROR: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
2013-03-29 18:11:19 --- STRACE: ErrorException [ 2 ]: Missing argument 1 for x(), called in /usr/web/test/myFramwork/protected/modules/default/IndexController.php on line 12 and defined ~ /usr/web/test/myFramwork/framework/classes/controller/controller.php [ 662 ]
--
#0 /usr/web/test/myFramwork/framework/classes/controller/controller.php(662): Rookie_Debug::error_handler(2, 'Missing argumen...', '/usr/web/test/m...', 662, Array)
#1 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): x()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#3 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#4 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#5 {main}
2013-03-29 18:15:26 --- ERROR: ErrorException [ 8 ]: Undefined variable: fields ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 18:15:26 --- STRACE: ErrorException [ 8 ]: Undefined variable: fields ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(8, 'Undefined varia...', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}
2013-03-29 18:15:36 --- ERROR: ErrorException [ 8 ]: Undefined variable: fields ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
2013-03-29 18:15:36 --- STRACE: ErrorException [ 8 ]: Undefined variable: fields ~ /usr/web/test/myFramwork/protected/modules/default/IndexController.php [ 12 ]
--
#0 /usr/web/test/myFramwork/protected/modules/default/IndexController.php(12): Rookie_Debug::error_handler(8, 'Undefined varia...', '/usr/web/test/m...', 12, Array)
#1 /usr/web/test/myFramwork/framework/classes/uri/uri.php(123): IndexController->index()
#2 /usr/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#3 /usr/web/test/myFramwork/index.php(49): Rookie_Uri::run()
#4 {main}