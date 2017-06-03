
$(function(){  
	$("#btn1").blur(function(){
		$.post("checkUser.php",{user:$("#btn1").val()},function(data){
			if(data=="1"){
				$("#userMsg").html("此用户名可以使用，赶紧注册吧");
			}else{
				$("#userMsg").html("此用户名已存在，请重新选择");
			}
		});		
	});
});




















