<?php	defined('ROOKIE') or die('No direct script access.');
/**
 * 日志数据模型
 * @author shendegang
 *
 */
class TestModel extends Rookie_Mongodb
{
	public $id;
	public $user_name;
	
	public $_table = 'test';
    public $_primarykey = 'id';
   // public $_fields = array('id','user_name');
	
    public function __construct()
    {
    		$this->user_name = "sdf22";
		$this->id = "alphaNumeric";
    		$this->setInit();
    		$res = $this->validate();
    		print_r($res);die;
    }
    
    public function test()
    {
    	
	$continent = geoip_record_by_name('1.50.21.255');
	print_r($continent);die;
	if ($continent) {
		    echo 'This host is located in: ' . $continent;
	}
		//    		print_r($res);die;
  		$res = $this->mongo()->selectDB('nosql')->selectCollection("test")->findOne();
  		print_r($res);
    }
    
    public function test1()
    {
    	
    	return (Rookie_Core::app('testDb')->table('Test')->find(array('where' => '1=1')));
    	
    //	$res = $this->find(array('where' => '1=1'));
    	//print_r($res);
//     	//测试主重数据库
//     	$this->insertAttributes(array('user_name' => 'test1'));
//     	$this->insertAttributes(array('user_name' => 'test2'));
//     	$this->insertAttributes(array('user_name' => 'test3'));
//     	$this->insertAttributes(array('user_name' => 'test4'));
//     	$this->find(array('where' => '1=1'));
    }
    
//this is generated by DooModelGen
    public function getVRules() {
        return array(
                'id' => array(
                        array( 'integer','请输入数字型' ),
                        array( 'min', 0 ),
                        array( 'maxlength', 11 ),
                        array( 'notnull' ),
                ),

                'user_name' => array(
                        array( 'maxlength', 145 ),
                        array( 'notnull' ),
                ),
            );
    }
}



