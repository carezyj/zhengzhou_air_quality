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
/*if($con==false){
	echo "连接数据库失败";
}else{
	echo "连接数据库成功"."<br />";
};*/
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
};
mysql_query("set names 'utf8");//数据库输出编码
mysql_select_db($db);//打开数据库
$sql="select * from zhengzhou_air_aqi_days";//sql语句
$result=mysql_query($sql,$con);//函数执行一条mysql查询
$data="";
$array=array();
class User{
	public $quality;
	public $aqi_days;
	public $year;
}
while($row =mysql_fetch_array($result)){
  $user=new User();
		$user->quality=$row['air_quality'];
		$user->aqi_days=$row['aqi_days'];
		$user->year=$row['year'];
		$array[]=$user;
}
$data=json_encode($array);
echo $data;

$sql="select * from zhengzhou_air_aqi_days where year like 2014;";
$result=mysql_query($sql,$con);
while($row=mysql_fetch_array($result)){
	echo "<div style=\"height:24px; line-height:24px; font-weight:bold;\">"; //排版代码
 echo $row["air_quality"]." ".$row["aqi_days"]."<br />";
}

?>
