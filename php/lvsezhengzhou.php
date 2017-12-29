<?php
header("Content-type: text/html; charset=utf-8");
// 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');  
// 响应类型  
header('Access-Control-Allow-Methods:POST');  
// 响应头设置  
header('Access-Control-Allow-Headers:x-requested-with,content-type');  
error_reporting(E_ALL^E_DEPRECATED);//设置报警级别
//php连接mysql数据库
$host='127.0.0.1'; //服务器地址
$root='root'; //数据库用户名
$pwd='123456'; //数据库密码
$db='lvsezhengzhou';//改成自己的mysql数据库名

$con=mysql_connect($host,$root,$pwd);//mysql_connect 成功返回连接标识，失败返回false
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
};
mysql_query("set names 'utf8");//数据库输出编码
mysql_select_db($db);//打开数据库
$sql_14="select * from zhengzhou_air_aqi_days where year = 2014;";//sql语句
$sql_15="select * from zhengzhou_air_aqi_days where year = 2015;";//sql语句
$sql_16="select * from zhengzhou_air_aqi_days where year = 2016;";//sql语句
$sql_17="select * from zhengzhou_air_aqi_days where year = 2017;";//sql语句
$sql_year="select DISTINCT year from zhengzhou_air_aqi_days ORDER BY year;";
$result_14=mysql_query($sql_14,$con);//函数执行一条mysql查询
$result_15=mysql_query($sql_15,$con);//函数执行一条mysql查询
$result_16=mysql_query($sql_16,$con);//函数执行一条mysql查询
$result_17=mysql_query($sql_17,$con);//函数执行一条mysql查询
$result_year=mysql_query($sql_year,$con);
$data="";
//$array_14=array();
//$array_15=array();
class User_14{
	public $quality_14;
	public $aqi_days_14;
	public $year_14;
}
class User_15{
	public $quality_15;
	public $aqi_days_15;
	public $year_15;
}
class User_16{
	public $quality_16;
	public $aqi_days_16;
	public $year_16;
}
class User_17{
	public $quality_17;
	public $aqi_days_17;
	public $year_17;
}
/*class User_year{
	public $years;
}*/
while(	$row1 =mysql_fetch_array($result_14)){
  $user_14=new User_14();
		$user_14->quality_14=$row1['air_quality'];
		$user_14->aqi_days_14=$row1['aqi_days'];
		$user_14->year_14=$row1['year'];
		$array_14[]=$user_14;
}
while($row2 =mysql_fetch_array($result_15)){
	 $user_15=new User_15();
		$user_15->quality_15=$row2['air_quality'];
		$user_15->aqi_days_15=$row2['aqi_days'];
		$user_15->year_15=$row2['year'];
		$array_15[]=$user_15;
}
while($row3 =mysql_fetch_array($result_16)){
	 $user_16=new User_16();
		$user_16->quality_16=$row3['air_quality'];
		$user_16->aqi_days_16=$row3['aqi_days'];
		$user_16->year_16=$row3['year'];
		$array_16[]=$user_16;
}
while($row4 =mysql_fetch_array($result_17)){
	 $user_17=new User_17();
		$user_17->quality_17=$row4['air_quality'];
		$user_17->aqi_days_17=$row4['aqi_days'];
		$user_17->year_17=$row4['year'];
		$array_17[]=$user_17;
}
	while($row5 =mysql_fetch_array($result_year)){
		$array_year[]=$row5['year'];	
	}

$arr=array_merge($array_14,$array_15,$array_16,$array_17,$array_year);
$data=json_encode($arr);
echo $data;

?>
