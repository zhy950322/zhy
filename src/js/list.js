$(function(){
	$('header').load("index.html header");
	$.getJSON("../picture.json",function(images){
		var img = images;
		console.log(img[0].src);
		$.each(img,function(j){

		$("<li><a href='details.html'><img src='../" + img[j].src + "'/><div><span>生巧克力</span><p>不支持7天无理由退货<span>￥66</span></p></div></a></li>").appendTo("#ul");
 		})
 	});
	
	$('.footer').load("index.html .footer");
	
})