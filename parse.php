<?php
$hour=$_POST["hour"];
$minute=$_POST["minute"];

$json=array("hour"=>$hour,"minute"=>$minute,"text"=>array("東大大会だよ！","間もなく表彰式が始まります"));

file_put_contents("./data.json",json_encode($json));


echo "更新が完了しました。設定画面は<a href='./settings.html'>こちら</a>から戻ることができます。";
?>
