<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-05-06 08:32:52 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/5186fa342ea1f.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-06 08:32:52 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/5186fa342ea1f.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}
2013-05-06 08:56:07 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/5186ffa7baf5d.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-06 08:56:07 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/5186ffa7baf5d.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}