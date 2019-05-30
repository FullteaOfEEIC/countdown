<?php
    $json=file_get_contents("./data.json");
    $json=json_decode($json, true);
    $hour=$json["hour"];
    $minute=$json["minute"];
    $text=$json["text"][0];
?>



<html lang="ja">
  <head></head>
  <body>
    <form action="./parse.php" method="POST">
      <p>終了時刻</p>
      <select name="hour"/>
        <?php
            for ($i=0;$i<24;$i++) {
                if ($i==$hour) {
                    echo '<option selected value="',$i,'">',$i,'</option>';
                } else {
                    echo '<option value="',$i,'">',$i,'</option>';
                }
            }
            ?>

      </select>
      時
      <select name="minute"/>
      <?php
          for ($i=0;$i<60;$i++) {
              if ($i==$minute) {
                  echo '<option selected value="',$i,'">',$i,'</option>';
              } else {
                  echo '<option value="',$i,'">',$i,'</option>';
              }
          }
          ?>
      </select>
      分


      <p>アナウンス</p>
      <?php
        for ($i=0;$i<10;$i++) {
            if ($i<count($text)) {
                echo '<input type="text" value="',$text[$i],'" style="width:100%;" name="text',$i,'">';
            } else {
                echo '<input type="text" style="width:100%;" name="text',$i,'">';
            }
        }
       ?>

      <input type="submit"/>
    </form>
  </body>
</html>
