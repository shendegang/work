<?php
/**
 * 用户登录注册
 * @author shendegang
 *
 */
class LoginController extends Controller
{
	public function login()
	{
		
		include Rookie_Template::tpl("login");
		
	}
	
	
	public function reg()
	{
	
		attServer::css();
		include Rookie_Template::tpl("reg");
	
	}
	
}