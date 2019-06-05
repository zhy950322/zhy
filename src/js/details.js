$(function(){
	$('header').load('index.html header',function(){
		//购物车
		//加载已有的购物车信息
		//loadCart();
		//给购物车按钮加一个点击事件
		$('#buy').click(function(){
			location.href = "shop.html";
		})
		//给加入购物车按钮添加点击事件
		$(".addToCart").click(function(e){
			//获取商品的id
			//var goodId = $(this).parent().parent().attr("data-good-id");
			var goodId = $('.mimg').attr("data-good-id");
			//获取商品的名称
			//var goodName = $(this).parent().siblings('h2').val();
			var goodName = $("h2").html();
			//获取商品的价格
			//var goodPrice = parseFloat($(this).parent().siblings("p").eq(0).html());
			var goodPrice = $('.price').html();
			//获取商品的图片
			//var goodSrc = $(this).parent().siblings("img").attr("src");
			var goodSrc = $(".img").attr("src");
			
			console.log(goodId + ':' + goodName + ':' + goodPrice + ':' + goodSrc);
			//console.log($(this));
		})
		
		
	});
	//放大镜
	var $oSmallpic = $('.small_pic');
	var $oMark = $('.mark');
	var $oFloat = $('.float_layer');
	var $oBigPic = $('.big_pic');
	var $oBigImg = $('.big_pic img');
	$oMark.mouseenter(function(){
		$oFloat.css({display:"block"});
		$oBigPic.css({display :"block"});
	});
	$oMark.mouseleave(function(){
		$oFloat.css({display : 'none'});
		$oBigPic.css({display :"none"});
	})
	$oMark.mousemove(function(evt){
		var e = evt || window.event;
		var x=$oSmallpic.offset()
		var left = e.pageX - x.left - $oFloat.innerWidth() / 2;
		var top = e.pageY - x.top - $oFloat.innerHeight() / 2; 
		if(left <= 0){
			left = 0;
		}else if(left >= $oMark.innerWidth() - $oFloat.innerWidth()){
			left = $oMark.innerWidth() - $oFloat.innerWidth();
		}
		if(top <= 0){
			top=0;
		}else if(top>= $oMark.innerHeight() - $oFloat.innerHeight()){
			top = $oMark.innerHeight() - $oFloat.innerHeight();
		}
		$oFloat.css({left : left + "px"});
		$oFloat.css({top : top + "px"});
		var pX = left/($oMark.innerWidth() - $oFloat.innerWidth()) ;
		var pY = top/($oMark.innerHeight() - $oFloat.innerHeight()) ;
		console.log();
        $oBigImg.css({left : -pX*($oBigImg.innerWidth() - $oBigPic.innerWidth()) + "px"});
       	$oBigImg.css({top : -pX*($oBigImg.innerHeight() - $oBigPic.innerHeight()) + "px"});
	});
	
	
	
	
	
	
	
	
	
	
	$('.footer').load("index.html .footer");
})
