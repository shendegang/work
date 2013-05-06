<?php defined('ROOKIE') or die('No direct script access.'); ?>
测试
fdffdfdfddf
<?php $n=1; if(is_array($info)) foreach($info AS $key => $val) { ?>
	id: <?php echo $val->id;?><br>
	<?php if($val->id == '30') { ?>
		等于30
	<?php } ?>
	name: <?php echo $val->user_name;?> <br>
<?php $n++;}unset($n); ?>