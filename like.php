<?php
	header("Content-Type:text/html; charset=utf-8");
	chmod("like_record.txt",0777);
	$total = 1 + (string)file_get_contents("like_record.txt");
	file_put_contents("like_record.txt", $total);
	echo file_get_contents("like_record.txt");/*¿é¥Xtxt¤º®e*/
?>
