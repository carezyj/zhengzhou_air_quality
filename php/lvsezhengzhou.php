<?php
//php连接mysql数据库
$host='127.0.0.1'; //服务器地址
$root='root'; //数据库用户名
$pwd='123456'; //数据库密码
$db='lvsezhengzhou';//改成自己的mysql数据库名

$con=mysql_connect($host,$root,$pwd);//mysql_connect 成功返回连接标识，失败返回false
if($con==false){
	echo "连接数据库失败";
}else{
	echo "连接数据库成功";
};
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
};
mysql_query("set names 'utf8");//数据库输出编码
mysql_select_db($db);//打开数据库
$sql="select * from zhengzhou_air_aqi_days;";//sql语句
$result=mysql_query($sql,$con);//函数执行一条mysql查询
while($row =mysql_fetch_array($result)){
	echo "<div style=\"height:24px; line-height:24px; font-weight:bold;\">"; //排版代码
 
echo $row["air_quality"]." ".$row["aqi_days"];
 //	printf("%s\t%s<br>",$row["air_quality"],$row["aqi_days"]);
//echo "</div>"; //排版代码

}

/*$mysql_conf = array(
    'host'    => 'localhost:3306', 
    'db'      => 'lvsezhengzhou', 
    'db_user' => 'root', 
    'db_pwd'  => '123456', 
    );
$mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);
if ($mysqli->connect_errno) {
    die("could not connect to the database:\n" . $mysqli->connect_error);//诊断连接错误
}
$mysqli->query("set names 'utf8';");//编码转化
$select_db = $mysqli->select_db($mysql_conf['db']);
if (!$select_db) {
    die("could not connect to the db:\n" .  $mysqli->error);
}$sql = "select * from zhengzhou_air_aqi_days;";
$res = $mysqli->query($sql);
if (!$res) {
    die("sql error:\n" . $mysqli->error);
}
 while ($row = $res->fetch_assoc()) {
       // var_dump($row);
		printf("%s\t%s<br>",$row["air_quality"],$row["aqi_days"]);
    }

$res->free();
$mysqli->close();*/
?>
