$(function(){
	$('header').load("index.html header");
	
// 	var $cakeLi = $('#cake-li');
// 	var $cakeNav = $('#canav');
// 	// $('#canav').css('background','red');
// 	$cakeLi.mouseenter(function(){
// 		$cakeNav.show();
// 		
// 	})
// 	$cakeLi.mouseleave(function(){
// 			$cakeNav.hide();
// 		})

//      $('#tel').click(function(){
// 		 $('#telp').show();
// 	 })
// 	 $('#tel').mouseleave(function(){
// 		 $('#telp').hide();
// 	 })
// 	 $('#pass').click(function(){
// 	 	$('#passw').show();
// 	 })
// 	 $('#pass').mouseleave(function(){
// 	 	$('#passw').hide();
// 	 })
// 	 
// 	 $('#pass1').click(function(){
// 	 $('#passw1').show();
// 	 })
// 	 $('#pass1').mouseleave(function(){
// 	 $('#passw1').hide();
// 	 })
	 
	 
	 var $phone = $('#tel');
	 var $utelp = $('#telp');
	 var arr = [false,false,false]
	 //设置失焦事件手机验证
	 $phone.blur(function(){
		 var Phone = $(this).val();
		 var re = /^(13|14|15|17|18)\d{9}$/g;
		 if(!re.test(Phone)){
			 $utelp.css({"display" : "block"});
			 arr[0]=false;
		 }else{
			 $utelp.css({"display" : "none"});
			 arr[0]=true;
		 }
	 })
	 
	 //密码验证
	 $('#pass').blur(function(){
		 var Pass = $(this).val();
		 var re = /^[0-9a-zA-Z]{6,12}$/;
		 if(!re.test(Pass)){
			 $('#passw').css({"display" : "block"});
			 arr[1]=false;
		 }else{
			 $("#passw").css({"display" : "none"});
			 arr[1]=true;
		 }
	 })
	 //重复验证码
	 $('#pass1').blur(function(){
		 var Pass1 = $(this).val();
		 if(Pass1 === $('#pass').val()){
			 $('#passw1').css({"display" : "none"});
			 arr[2]=true;
		 }else{
			 $('#passw1').css({"display" : "block"});
			 arr[2]=false;
		 }
	 })
	 
	 $('#reg').click(function(event){
		 var Phone = $phone.val();
		 var Pass = $('#pass').val();
		 if(!Phone){
			 alert('手机号不能为空！');
			 return;
		 }
		 if(arr.indexOf(false) != -1){
			 alert('请正确填写信息！');
			 return;
		 }
		 
		 var cookieStr = $.cookie('user') ? $.cookie('user') : '';
		 var cookieObj = convertCookieStrToObj(cookieStr);
		 if(Phone in cookieObj){
			 alert('手机号已注册');
			 location.href='../html/login.html';
		 }else{
			 cookieObj[Phone]=Pass;
			 cookieStr = convertObjToCookieStr(cookieObj);
			 $.cookie('user',cookieStr),{expires : 7,path : '/'};
			 alert('注册成功！');
			 location.href='../html/login.html';
		 }
	 })
	 
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
	 //将对象转为cookie字符串
	 function convertObjToCookieStr(obj){
		 var str = '';
		 for(var i in obj){
			 var pwd = obj[i];
			 if(str){
				 str += ',';
			 }
			 str += i + ':' + pwd;
		 }
		 return str;
	 }
     $('.footer').load("index.html .footer");
})