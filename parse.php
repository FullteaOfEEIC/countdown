<?php
$hour=$_POST["hour"];
$minute=$_POST["minute"];

$text=array();
for ($i=0;$i<10;$i++) {
    if ($_POST["text$i"]!="") {
        $text[]=$_POST["text$i"];
    }
}

$json=array("hour"=>$hour,"minute"=>$minute,"text"=>array($text));

file_put_contents("./data.json", json_encode($json));


echo "更新が完了しました。設定画面は<a href='./settings.php'>こちら</a>から戻ることができます。";
?>
