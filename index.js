$(document).ready(function(){
	$("#カップ").one("click",function(){
		random_result()
	});
});
function random_result()
{
	//window.alert(5 + 6);
	var rv = 3*Math.random();
	if(rv<=1)
	{
		document.getElementById('占い結果').src = '占い結果/result_love.jpg';
		document.getElementById('占い結果文字').src = '占い結果/result_love_txt.png';
	}
	else if(rv <= 2)
	{
		document.getElementById('占い結果').src = '占い結果/result_tank.jpg';
		document.getElementById('占い結果文字').src = '占い結果/result_tank_txt.png';
	}
	else
	{
		document.getElementById('占い結果').src = '占い結果/result_neko.jpg';
		document.getElementById('占い結果文字').src = '占い結果/result_neko_txt.png';
	}	
	document.getElementById('占い結果').style.opacity = 1;
	document.getElementById('占い結果文字').style.opacity = 1;
	document.getElementById('カップ').style.opacity = 0;
}



$(document).ready(function(){

    setInterval(function(){
      $.ajax({
            method: "POST",
            url: "http://luffy.ee.ncku.edu.tw/~usagi335/chat.php"
        }).done(function(data){
            $("#contents").html(data);
        })
    }, 1000);

    $('button').click(function(){
        $.ajax({
            method: "POST",/*HTTP method for request*/
            url: "http://luffy.ee.ncku.edu.tw/~usagi335/chat.php",
            data: {text: $('input').val()}
        }).done(function(data){
            $("#contents").html(data);
            $('input').val("");
        });
    });

    $(document).keydown(function(e){
       if(e.keyCode == 13) {
           $.ajax({
                method: "POST",
                url: "http://luffy.ee.ncku.edu.tw/~usagi335/chat.php",
                data: {text: $('input').val()}
            }).done(function(data){
                $("#contents").html(data);
                $('input').val("");
            });
       }
    });
});

$(document).ready(function(){	
    setInterval(function(){
      $.ajax({
            method: "POST",
            url: "http://luffy.ee.ncku.edu.tw/~usagi335/show_like.php"
        }).done(function(data){
            $("#拍手数").html(data);
        })
    }, 1000);
	$("#拍手数図").one("click",function(){
        $.ajax({
            method: "POST",/*HTTP method for request*/
            url: "http://luffy.ee.ncku.edu.tw/~usagi335/like.php"
        }).done(function(data){
            $("#拍手数").html(data);
        });
    });
});