<?php
header("Content-Type:text/html; charset=utf-8");
mb_internal_encoding('utf-8');
$call = $_POST["call"];
$actions = $_POST["actions"];
if($actions == "register_action")register($call);
function register($Jsoninput)
{
	$Djson = @json_decode($Jsoninput);
	$saveAccount = $Djson->{"Account"};
	$filename = "user/".$saveAccount.".txt";
	if(@fopen($filename, "r"))
	{
		echo "AccountAlreadyExist";
		return 0;
	}
	@chmod($filename,0777);
	$fp_user = @fopen($filename, "w");
	fputs($fp_user, "$Jsoninput");//ภxฆsงนฒฆ
	fclose($fp_user);
}
?>