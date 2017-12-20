<?php
//php连接mysql数据库
$host='127.0.0.1'; //服务器地址
$root='root'; //数据库用户名
$pwd='123456'; //数据库密码
$database='lvsezhengzhou';//改成自己的mysql数据库名

$con=mysql_connect($host,$root,$pwd);//mysql_connect 成功返回连接标识，失败返回false
if($con==false){
	echo "连接数据库失败";
}else{
	echo "连接数据库成功";
};
mysql_query("set names 'utf8");//数据库输出编码
mysql_select_db($database);//打开数据库
$sql="select * from zhengzhou_air_aqi_days";//sql语句
$result=mysql_query($sql,$con);
while($row =mysql_fetch_array($result)){
	echo "<div style=\"height:24px; line-height:24px; font-weight:bold;\">"; //排版代码
 
echo $row['Topic'] . "<br/>";
 
echo "</div>"; //排版代码

}
?>