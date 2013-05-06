<?php defined('ROOKIE') or die('No direct script access.'); ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>新浪轻博客_Qing_注册:记录生活 分享兴趣</title>
<meta name="keywords" content="注册，轻博客,Qing,新浪轻博客,weibo,博客,社区,摄影,旅游,美食,时尚，艺术,娱乐 " />
<meta name="description" content="新浪轻博客，轻松分享你的兴趣。直接使用新浪微博账号登录，无需重复注册，立刻就可以加入当前人气最高的兴趣分享社区——Qing， 新浪轻博客。便捷的多图发布，清新文艺的个性化模板，时尚达人的聚集地，用图片记录生活的最佳选择，随地随地与好友一起，在兴趣中寻找快乐的人气社区，并可以通过网页，手机等多种方式进行更新，发布。 " />
<link href="<?php echo attServer::css(); ?>/static/default/css/member/register.css" rel="stylesheet" type="text/css" />
<link href="<?php echo attServer::css(); ?>/static/default/css/member/style_merge.css" rel="stylesheet" type="text/css" />
<link href="<?php echo attServer::css(); ?>/static/default/css/member/register_thirdParty.css?version=affe6957272e430f" type="text/css" rel="stylesheet" />
<script type="text/javascript">
var $CONFIG = {
	$encode_key     : "BD325CE52FC6BA090AC0C7A2039236587F99C30FA518F601F2AD33019514EE5A4340A964853E1BDF5374AB4AC22F5CFF3288E5DB94E6752B4999972DF4E23DACACAE4E4DCFB6CBAE256F1B19C4BA892D54C7A3E068F93AB47EC50635556FC223F02CB1F520631E2F03E5509B6C1E24DFB7962BCD6DC74159BF0E5AFC03D9A00D",
	$key_plus     : "10001",
	$lang			: "zh",
	$oid			: "",
	$uid			: "",
	$severtime		: "1364812484",
	$token			: "ff65e5e21f7cf0ad5b429889f28c1a73",
	$sinaId			: "cf3bf70178204b2003529cf69726c300",
	$product		: "register",
	$pageid			: "register",
	$cuser_status	: "full",
	$skin			: "",
	$domain         : "weibo.com/",
	$FW			: "",
	$blackList      : "163.com,126.com,yeah.net,hotmail.com"
	
};
var scope = $CONFIG;

</script>
<script type="text/javascript" src="<?php echo attServer::js()?>/static/default/js/member/lang_zh.js?version=affe6957272e430f"></script>
<script type="text/javascript" src="<?php echo attServer::js()?>/static/default/js/member/register_iframe_qingboke.js?version=affe6957272e430f"></script> 

<script>
App.alert({'code': 'ssss'});
</script>
</head>
<div></div>
<body class="merge_regist">
<div id="wrap">
  <div class="head">
    <div class="logo">
	  <span class="logoimg"></span>
      <a href="http://qing.blog.sina.com.cn/login.html" title="新浪博客" class="logolink"></a>
	</div>
	 
	<div class="clearit"></div>
  </div>
  <div class="main">
    <div class="main_top"></div>
    
	<div class="main_cen">
    	<div class="reg_tab"> 
        	<ul>
            	<li><a href="https://login.sina.com.cn/signup/signupmail.php?entry=blog">注册新浪博客-传统版</a></li>
                <li class="qing"><a href="#" class="cur">注册新浪博客-清新版</a></li>
            </ul>
            <div class="clearit"></div>
        </div>
		<div class="reg_title"><strong>注册新浪博客-清新版，仅需30秒。</strong>提示：新浪微博账号。<a href="http://qing.blog.sina.com.cn/login.html">请直接登录</a></div>
		<div class="register_frame" style="width: 600px; height:400px ">
		

<div class="S_register_cont">
    <div class="register_module">
        <div class="form_table"  id="form_table" />
		<dl class="email clearfix">
		            <dt>电子邮箱：</dt>
		            <dd class="conbox">
		              <input type="text" class="W_inputStp" id="reg_username" name="6d15011487" autocomplete="off">
		            </dd>
		            <dd class="tipbox"  id="red_reg_username">
		              <div>
		                <div class="M_notice_warn">请输入你的常用邮箱，如：example@example.com 它将成为你未来的登录帐号</div>
		              </div>
		            </dd>
		          </dl>
		          <dl class="password clearfix">
		            <dt>创建密码：</dt>
		            <dd class="conbox">
		              <input type="password" class="W_inputStp" id="reg_password" name="password" />
		            </dd>
		            <dd class="tipbox" id="red_reg_password"></dd>
		          </dl>
		          <dl class="nickname clearfix">
		            <dt>昵称：</dt>
		            <dd class="conbox">
		              <input type="text" class="W_inputStp" id="nickname" autocomplete="off" name="nickname"/>
		            </dd>
		            <dd class="tipbox" id="red_nickname"></dd>
		          </dl>
		          <dl class="gender clearfix">
		            <dt>性别：</dt>
					<dd class="conbox"> 
		              <input type="radio" value="1" checked="checked" id="3" class="W_radio" name="gender">
		              <label for="3" class="cholab">男</label>
		              <input type="radio" value="2" id="4" class="W_radio" name="gender">
		              <label for="4" class="cholab">女</label>
		              </dd>
					</dl>
		          <dl class="seat clearfix">
		            <dt>所在地：</dt>
		            <dd class="conbox">
		              <div class="addchoose">
		                <select class="select" id="province" name="province" truevalue="11">
		                </select>
		                <select class="select" id="city" name="city" truevalue="">
		                </select>
		              </div>
		            </dd>
		          </dl>
		                    <dl class="verification_code clearfix">
		            <dt>手机号：</dt>
		            <dd class="conbox">
		              <input type="text" class="W_inputStp" name="mobile" id="mobile">
		              <a class="W_btn_a" href="javascript:void(0);" id="get_code"><span>免费获取手机短信验证码</span></a>
		            </dd>
		            <dd id="red_mobile" class="tipbox">
		            </dd>
		          </dl>
		          <dl class="verification_code clearfix">
		            <dt>短信验证码：</dt>
		            <dd class="conbox">
		              <input type="text" class="W_inputStp W_inputMsg" id="mobilebasedoor" name="mobilebasedoor">
		            </dd>
		            <dd class="tipbox" id="red_door">
		            </dd>
		          </dl>
		                    <dl class="p_btn clearfix">
		            <dt>&nbsp;</dt>
		            <dd><a class="W_btn_d" href="javascript:void(0);" id="submit"><span>立即注册</span></a><a class="W_linka" href="http://login.sina.com.cn/regagreement.html" target="_blank">新浪网络服务使用协议</a></dd>
		          </dl>
		        </div>
		    </div>
		</div>
		
        </div>
     </div>
    <div class="main_bottom"></div>
  </div>
  
 <!--底部模板组件-->
<div class="footer">
	<p><a href="http://qing.blog.sina.com.cn/blog/controllers/helpqa.php" target="_blank">帮助</a> <span>|</span> <a href="http://e.weibo.com/1951657750/messboard" target="_blank">意见反馈</a> <span>|</span> <a href="http://www.sina.com.cn" target="_blank">新浪网导航</a> <span>|</span>  Copyright&copy; &nbsp;&nbsp;1996-2013 SINA新浪公司 版权所有</p>
	<p>客服电话：4006900000 &nbsp;提示音后按1键(按当地市话标准计费)</p>
</div>
<!-- 底部模板组件-->

</div>

</body>
</html>
