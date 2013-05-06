<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-03-26 16:30:01 --- ERROR: ErrorException [ 2 ]: include_once(/xhprof/xhprof_lib/utils/xhprof_lib.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/index.php [ 59 ]
2013-03-26 16:30:01 --- STRACE: ErrorException [ 2 ]: include_once(/xhprof/xhprof_lib/utils/xhprof_lib.php): failed to open stream: No such file or directory ~ /usr/web/test/myFramwork/index.php [ 59 ]
--
#0 /usr/web/test/myFramwork/index.php(59): Rookie_Debug::error_handler(2, 'include_once(/x...', '/usr/web/test/m...', 59, Array)
#1 /usr/web/test/myFramwork/index.php(59): include_once()
#2 {main}