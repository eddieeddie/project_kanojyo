<?php
chmod("chat_record.txt",0777);

$text = $_POST["text"];
if($text)
{
	if(strcasecmp((string)$text, "\$clear") == 0)
	{
		file_put_contents("chat_record.txt", "");/*清空txt*/
		file_put_contents("like_record.txt", 0);/*清空txt*/
	    echo file_get_contents("chat_record.txt");/*輸出txt內容*/
	}
	else
	{
	    $text = htmlspecialchars($text);/*輸入字串*/
	    $text .= "<br>";/*輸入字串加上空行*/
	    file_put_contents("chat_record.txt", $text, FILE_APPEND);/*加到txt中*/
	    echo file_get_contents("chat_record.txt");/*輸出txt內容*/
	}
}
else
{
    echo file_get_contents("chat_record.txt");/*輸出txt內容*/
}
?>
