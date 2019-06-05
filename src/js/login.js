$(function(){
	$('header').load("index.html header"); 
	//给登录按钮设置点击事件
	$('#log').click(function(event){
		var uName = $('#tel').val();
		var uPwd = $('#pass').val();
		var cookieStr = $.cookie('user') ? $.cookie('user') : '';
		var cookieObj = convertCookieStrToObj(cookieStr);
		if(cookieObj[uName] == uPwd){
			alert('登录成功')
			location.href = '../html/index.html';
		}else{
			alert('用户名与密码不匹配');
		}
	})
	
	$('#log1').click(function(event){
		location.href = '../html/register.html';
	})
	//将cookie字符串转为cookie对象
	function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		var arr = str.split(',');
		var obj = {};
		for(var i = 0; i < arr.length; i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	} 
	
	$('.footer').load("index.html .footer");
})