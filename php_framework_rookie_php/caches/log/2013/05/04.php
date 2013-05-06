<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-05-04 22:41:28 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/51851e187331f.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-04 22:41:28 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/51851e187331f.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}
2013-05-04 22:45:56 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/51851f24910a1.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-04 22:45:56 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/51851f24910a1.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}
2013-05-04 22:45:57 --- ERROR: ErrorException [ 2 ]: fopen(/tmp/xhprof/51851f25843ff.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
2013-05-04 22:45:57 --- STRACE: ErrorException [ 2 ]: fopen(/tmp/xhprof/51851f25843ff.hx): failed to open stream: No such file or directory ~ /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php [ 136 ]
--
#0 [internal function]: Rookie_Debug::error_handler(2, 'fopen(/tmp/xhpr...', '/opt/web/test/m...', 136, Array)
#1 /opt/web/test/myFramwork/xhprof/xhprof_lib/utils/xhprof_runs.php(136): fopen('/tmp/xhprof/518...', 'w')
#2 /opt/web/test/myFramwork/index.php(56): XHProfRuns_Default->save_run(Array, 'hx')
#3 {main}