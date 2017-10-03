var lang = "jpn";
if(getCookie("lang")=="cht")lang ="cht";
if(getCookie("lang")=="jpn")lang ="jpn";

$(document).ready(function(){	
	$("#deliverbtn").click(function(){
		if(checkinput())
		{
	        $.ajax({
	            method: "POST",/*HTTP method for request*/
	            url: "game.php",
	        	dataType: 'text',
	    	    data: {call: login(),actions: "game_login"}
	        }).done(function(data){
	        	if(data.charAt(0)=="{")
	        	{
	        		document.getElementById("ID").setAttribute("style", "position:absolute;opacity:0;left:-830px;top:-50px");
	        		document.getElementById("sce00").setAttribute("style", "position:absolute;opacity:0;left:0px;top:275px");
	        		document.getElementById("sce01").setAttribute("style", "position:absolute;opacity:0;left:0px;top:375px");
	        		document.getElementById("sce02").setAttribute("style", "position:absolute;opacity:0;left:0px;top:475px");
					if(lang == "cht")document.getElementById("ID").innerHTML = JSON.parse(data).ID+"，歡迎回來";
					if(lang == "jpn")document.getElementById("ID").innerHTML = JSON.parse(data).ID+"，お帰り";
					$("#ID").animate({opacity: 1}, 1000,function(){
								if(lang == "cht")document.getElementById("ID").innerHTML = "名稱："+JSON.parse(data).ID;
								if(lang == "jpn")document.getElementById("ID").innerHTML = "名前："+JSON.parse(data).ID;})
						.animate({marginTop: "-10px",marginLeft: "830px"}, 500,function(){});
					$("#sce00").animate({opacity: 0.75}, 1000,function(){})
						.animate({marginTop: "-160px",marginLeft: "0px"}, 500,function(){});
					$("#sce01").animate({opacity: 0.75}, 1000,function(){})
						.animate({marginTop: "-160px",marginLeft: "0px"}, 500,function(){});
					$("#sce02").animate({opacity: 0.75}, 1000,function(){})
						.animate({marginTop: "-160px",marginLeft: "0px"}, 500,function(){});
	        		userdata = data;
					SaveUserData = JSON.parse(userdata);
	        	}
	        	else if(data=="error1")
	        	{
					var error = document.createElement("p");
					error.setAttribute("id", "error");
					error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
					document.getElementById("accountWord").appendChild(error);
					if(lang == "cht")document.getElementById('error').innerHTML = "帳號不存在，可以馬上加入會員喔";
					if(lang == "jpn")document.getElementById('error').innerHTML = "アカウントがないね、早く会員になるね";
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
	        	}
	        	else if(data=="error2")
	        	{
					var error = document.createElement("p");
					error.setAttribute("id", "error");
					error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:110px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
					document.getElementById("passwdWord").appendChild(error);
					if(lang == "cht")document.getElementById('error').innerHTML = "密碼錯誤";
					if(lang == "jpn")document.getElementById('error').innerHTML = "パスワードが違う";
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
	        	}
	        });
	    }
    });
});
function login()
{
	var account = document.getElementById('account').value;
	var passwd = document.getElementById('passwd').value;
	var output = "{\"Account\":\"" +account+ "\",\"Passwd\":\"" +passwd+"\"}";
	return output;
}
function checkinput()
{
	var account = document.getElementById('account').value;
	var passwd = document.getElementById('passwd').value;
	for(var i = 0;i < account.length;i++)
	{
		if(account.charAt(i)=='\\' || account.charAt(i)=='/' || account.charAt(i)==':' || account.charAt(i)=='*' || account.charAt(i)=='?' || account.charAt(i)=='<' || account.charAt(i)=='>' || account.charAt(i)=='|' ||account.charAt(i)=='$'||account.charAt(i)=='"'||account.charAt(i)=='.'||account.charAt(i)==';')
		{
			var error = document.createElement("p");
			error.setAttribute("id", "error");
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('アカウントdiv').appendChild(error); 
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
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:109px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('パスワードdiv').appendChild(error); 
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
	return true;
}