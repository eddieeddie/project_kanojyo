var lang = "jpn";
if(getCookie("lang")=="cht")lang ="cht";
if(getCookie("lang")=="jpn")lang ="jpn";
setLang("Regi0000",lang,"Title");
setLang("Regi0001",lang,"アカウント");
setLang("Regi0002",lang,"パスワード");
setLang("Regi0003",lang,"再度入力");
setLang("Regi0004",lang,"ご名前");
$(document).ready(function(){	
	$("#deliverbtn").click(function(){
		if(checkinput())
		{
	        $.ajax({
	            method: "POST",//HTTP method for request
	            url: "Register.php",
	        	dataType: 'text',
	        data: {call: regist(),actions: "register_action"}
	        }).done(function(data){
	            if(data == "AccountAlreadyExist")
	            {
					var error = document.createElement("p");
					error.setAttribute("id", "error");
					error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
					document.getElementById('アカウント').appendChild(error); 
					if(lang == "cht")document.getElementById('error').innerHTML = "這個帳號已被使用，請換一個吧";
					if(lang == "jpn")document.getElementById('error').innerHTML = "このアカウントは既に使われたので、他のを試してください";
					$("#アカウントdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
					$("#error").animate({opacity: 1}, 300,function(){})
									.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
	            }
	            else
	            {
	            	$("#アカウントdiv").hide();
	            	$("#パスワードdiv").hide();
	            	$("#再度入力div").hide();
	            	$("#ご名前div").hide();
	            	$("#deliverbtn").hide();
	            	
					var str1 = document.createElement("p");
					str1.setAttribute("id", "str1");
					str1.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:660px;top:180px;font-family:微軟正黑體;font-weight :bold;font-size:40px;color:#ff0000;white-space:nowrap;");
					document.body.appendChild(str1); 
					if(lang == "cht")document.getElementById('str1').innerHTML = "\n成功加入會員 ^_^";
					if(lang == "jpn")document.getElementById('str1').innerHTML = "\n会員になります ^_^";
					
					var str2 = document.createElement("p");
					str2.setAttribute("id", "str2");
					str2.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:660px;top:270px;font-family:微軟正黑體;font-weight :bold;font-size:30px;color:#ff6600;white-space:nowrap;");
					document.body.appendChild(str2); 
					if(lang == "cht")document.getElementById('str2').innerHTML = "\n您的帳號為："+document.getElementById('account').value;
					if(lang == "jpn")document.getElementById('str2').innerHTML = "\nあなたのアカウントは："+document.getElementById('account').value;
					
					var str3 = document.createElement("p");
					str3.setAttribute("id", "str3");
					str3.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:660px;top:350px;font-family:微軟正黑體;font-weight :bold;font-size:30px;color:#ff6600;white-space:nowrap;");
					document.body.appendChild(str3); 
					if(lang == "cht")document.getElementById('str3').innerHTML = "\n您的名稱為："+document.getElementById('id').value;
					if(lang == "jpn")document.getElementById('str3').innerHTML = "\nあなたの名前は："+document.getElementById('id').value;
					
					
					var playbtn = document.createElement("IMG");
					playbtn.setAttribute("id", "playbtn");
					playbtn.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:635px;top:450px");
					if(lang == "cht")playbtn.src = "index/pic/cht/Play_ready.png";
					if(lang == "jpn")playbtn.src = "index/pic/jpn/Play_ready.png";
					document.body.appendChild(playbtn);
					$("#playbtn").wrap("<a href='Game.html'></a>");
					
					$("#str1").animate({marginTop: "70px",opacity: 1}, 500,function(){
						$("#str2").animate({marginTop: "70px",opacity: 1}, 500,function(){
							$("#str3").animate({marginTop: "70px",opacity: 1}, 500,function(){
								$("#playbtn").animate({marginTop: "70px",opacity: 0.4}, 500,function(){									
								    $("#playbtn").hover(function(){
								    	$("#playbtn").animate({opacity: 1}, 0,function(){});}
								        ,function(){
								       	$("#playbtn").animate({opacity: 0.4}, 0,function(){});
									});
								});
							});
						});
					});
					
	            }
	        });
	    }
    });
    
	$("#deliverbtn").mouseover(function(){
		document.getElementById("deliverbtn").src = "Register/RegistBtnHover.png";})
	$("#deliverbtn").mouseout(function(){
		document.getElementById("deliverbtn").src = "Register/RegistBtnNormal.png";})
	$("#deliverbtn").mouseout(function(){
		document.getElementById("deliverbtn").opacity = 0.5;})
});
function regist()
{
	var currentdate = new Date();
	var NOWtime =  currentdate.getFullYear() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getDate() + "    "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
	var account = document.getElementById('account').value;
	var passwd = document.getElementById('passwd').value;
	var id = document.getElementById('id').value;
	var output = "{\"Account\":\"" +account+ "\",\"Passwd\":\"" +passwd+"\",\"ID\":\""+id+"\",\"Money\":\"3000\",\"DialogID\":{"+
				"\n\"00\":{\"save1\":\"00_01_01\",\"save2\":\"\",\"save3\":\"\",\"save4\":\"\",\"save5\":\"\"},"+
				"\n\"01\":{\"save1\":\"01_01_01\",\"save2\":\"\",\"save3\":\"\",\"save4\":\"\",\"save5\":\"\"},"+
				"\n\"02\":{\"save1\":\"UNAVAILABLE\",\"save2\":\"\",\"save3\":\"\",\"save4\":\"\",\"save5\":\"\"}}\n,"+
		
				"\"SaveTime\":{"+
				"\n\"00\":{\"save1\":\""+NOWtime+"\",\"save2\":\"\",\"save3\":\"\",\"save4\":\"\",\"save5\":\"\"},"+
				"\n\"01\":{\"save1\":\""+NOWtime+"\",\"save2\":\"\",\"save3\":\"\",\"save4\":\"\",\"save5\":\"\"},"+
				"\n\"02\":{\"save1\":\"UNAVAILABLE\",\"save2\":\"\",\"save3\":\"\",\"save4\":\"\",\"save5\":\"\"}}\n,"+
		
				"\"Love\":{"+
				"\"野野原ゆずこ\":\"0\","+//ゆずこ
				"\"櫟井唯\":\"0\","+//唯
				"\"遠坂凜\":\"0\","+//凛
				"\"黑雪學姊\":\"0\","+//黑雪學姊
				"\"END\":\"0\"}}";
	return output;
}
function checkinput()
{
	var account = document.getElementById('account').value;
	var passwd = document.getElementById('passwd').value;
	var passwd2 = document.getElementById('passwd2').value;
	var id = document.getElementById('id').value;
	if(passwd != passwd2)
	{
		var error = document.createElement("p");
		error.setAttribute("id", "error");
		error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:153px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
		document.getElementById('アカウント').appendChild(error); 
		if(lang == "cht")document.getElementById('error').innerHTML = "兩次密碼輸入不一致，請再次確認";
		if(lang == "jpn")document.getElementById('error').innerHTML = "パスワードは一致ではない、再度入力してください";
		$("#error").animate({opacity: 1}, 300,function(){})
						.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
		$("#再度入力div").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
		return false;
	}
	if(account.length < 3)
	{
		var error = document.createElement("p");
		error.setAttribute("id", "error");
		error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
		document.getElementById('アカウント').appendChild(error); 
		if(lang == "cht")document.getElementById('error').innerHTML = "帳號太短，至少需要3個字符";
		if(lang == "jpn")document.getElementById('error').innerHTML = "アカウントは短すぎる、最低文字数は3です";
		$("#アカウントdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
		$("#error").animate({opacity: 1}, 300,function(){})
						.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
		return false;
	}
	if(passwd.length < 8)
	{
		var error = document.createElement("p");
		error.setAttribute("id", "error");
		error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:109px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
		document.getElementById('アカウント').appendChild(error); 
		if(lang == "cht")document.getElementById('error').innerHTML = "密碼太短，至少需要8個字符";
		if(lang == "jpn")document.getElementById('error').innerHTML = "パスワードは短すぎる、最低文字数は８です";
		$("#error").animate({opacity: 1}, 300,function(){})
						.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
		$("#パスワードdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
		return false;
	}
	for(var i = 0;i < account.length;i++)
	{
		if(account.charAt(i)=='\\' || account.charAt(i)=='/' || account.charAt(i)==':' || account.charAt(i)=='*' || account.charAt(i)=='?' || account.charAt(i)=='<' || account.charAt(i)=='>' || account.charAt(i)=='|' ||account.charAt(i)=='$'||account.charAt(i)=='"'||account.charAt(i)=='.'||account.charAt(i)==';')
		{
			var error = document.createElement("p");
			error.setAttribute("id", "error");
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('アカウント').appendChild(error); 
			if(lang == "cht")document.getElementById('error').innerHTML = "帳號裡面含有非法字元";
			if(lang == "jpn")document.getElementById('error').innerHTML = "アカウントの中で、違法キャラクタがある";
			$("#error").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
			$("#アカウントdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
			return false;
		}
	}
	for(var i = 0;i < passwd.length;i++)
	{
		if(passwd.charAt(i)=='\\' || passwd.charAt(i)=='/' || passwd.charAt(i)==':' || passwd.charAt(i)=='*' || passwd.charAt(i)=='?' || passwd.charAt(i)=='<' || passwd.charAt(i)=='>' || passwd.charAt(i)=='|' ||passwd.charAt(i)=='$'||passwd.charAt(i)=='"'||passwd.charAt(i)=='.'||passwd.charAt(i)==';')
		{
			var error = document.createElement("p");
			error.setAttribute("id", "error");
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:109px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('パスワード').appendChild(error); 
			if(lang == "cht")document.getElementById('error').innerHTML = "密碼裡面含有非法字元";
			if(lang == "jpn")document.getElementById('error').innerHTML = "パスワードの中で、違法キャラクタがある";
			$("#error").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
			$("#パスワードdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
			return false;
		}
	}
	for(var i = 0;i < passwd2.length;i++)
	{
		if(passwd2.charAt(i)=='\\' || passwd2.charAt(i)=='/' || passwd2.charAt(i)==':' || passwd2.charAt(i)=='*' || passwd2.charAt(i)=='?' || passwd2.charAt(i)=='<' || passwd2.charAt(i)=='>' || passwd2.charAt(i)=='|' ||passwd2.charAt(i)=='$'||passwd2.charAt(i)=='"'||passwd2.charAt(i)=='.'||passwd2.charAt(i)==';')
		{
			var error = document.createElement("p");
			error.setAttribute("id", "error");
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:153px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('再度入力').appendChild(error); 
			if(lang == "cht")document.getElementById('error').innerHTML = "密碼裡面含有非法字元";
			if(lang == "jpn")document.getElementById('error').innerHTML = "パスワードの中で、違法キャラクタがある";
			$("#error").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
			$("#再度入力div").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
			return false;
		}
	}
	for(var i = 0;i < id.length;i++)
	{
		if(id.charAt(i)=='\\' || id.charAt(i)=='/' || id.charAt(i)==':' || id.charAt(i)=='*' || id.charAt(i)=='?' || id.charAt(i)=='<' || id.charAt(i)=='>' || id.charAt(i)=='|' ||id.charAt(i)=='$'||id.charAt(i)=='"'||id.charAt(i)=='.'||id.charAt(i)==';')
		{
			var error = document.createElement("p");
			error.setAttribute("id", "error");
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:260px;top:197px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('ご名前').appendChild(error); 
			if(lang == "cht")document.getElementById('error').innerHTML = "名稱裡面含有非法字元";
			if(lang == "jpn")document.getElementById('error').innerHTML = "お名前の中で、違法キャラクタがある";
			$("#error").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
			$("#ご名前div").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
			return false;
		}
	}
	return true;
}