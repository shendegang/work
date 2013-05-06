<?php defined('ROOKIE') or die('No direct script access.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="/index/model/gii">
	请选择数据库: 
	<select>
		<option>test</option>
		<option>test</option>
		<option>test</option>
	</select>
	
	请选择表
	<select>
		<option>test</option>
		<option>test</option>
		<option>test</option>
	</select>
	
	<input type="submit" name="submit" value="生成模块">
</form>

<form action="/index/model/gii">
	控制器名称: <input type="text" name="controllerName" value="" />
	<input type="submit" name="submit" value="生成控制器">
</form>
</body>
</html>