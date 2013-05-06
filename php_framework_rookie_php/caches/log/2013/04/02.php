<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-04-02 10:48:17 --- ERROR: ErrorException [ 2 ]: filemtime(): stat failed for /opt/web/test/myFramwork/protected/templates/default/member/reg.php ~ /opt/web/test/myFramwork/framework/classes/template/template.php [ 64 ]
2013-04-02 10:48:17 --- STRACE: ErrorException [ 2 ]: filemtime(): stat failed for /opt/web/test/myFramwork/protected/templates/default/member/reg.php ~ /opt/web/test/myFramwork/framework/classes/template/template.php [ 64 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'filemtime(): st...', '/opt/web/test/m...', 64, Array)
#1 /opt/web/test/myFramwork/framework/classes/template/template.php(64): filemtime('/opt/web/test/m...')
#2 /opt/web/test/myFramwork/protected/modules/member/LoginController.php(20): Rookie_Template::tpl('reg')
#3 /opt/web/test/myFramwork/framework/classes/uri/uri.php(123): LoginController->reg()
#4 /opt/web/test/myFramwork/framework/classes/uri/uri.php(38): Rookie_Uri::routeTo()
#5 /opt/web/test/myFramwork/index.php(50): Rookie_Uri::run()
#6 {main}