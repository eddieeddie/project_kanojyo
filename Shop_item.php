<?php
mb_internal_encoding('utf-8');
$item = $_POST["item"];
$actions = $_POST["actions"];
if($actions == "getPrice")get($item,"getPrice");

function get($index,$price)//cht jp
{
	$filename = "data/shop_items.xml";
	@chmod($filename,0777);
	$xml=simplexml_load_file($filename) or die("Error: Cannot create object");
	echo $xml->xpath('//Item[@name="'.$item.'"]')[0];
}
?>