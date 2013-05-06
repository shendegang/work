<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-05-03 19:24:36 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/51839e745550c.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-03 19:24:36 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/51839e745550c.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}
2013-05-03 19:25:02 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/51839e8e798a6.hx): failed to open stream: Permission denied ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-03 19:25:02 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/51839e8e798a6.hx): failed to open stream: Permission denied ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}
2013-05-03 19:25:03 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/51839e8f79a81.hx): failed to open stream: Permission denied ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-03 19:25:03 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/51839e8f79a81.hx): failed to open stream: Permission denied ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}