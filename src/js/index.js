// var $cakeLi = $('#cake-li');
// var $cakeNav = $('#canav');
// // $('#canav').css('background','red');
// $cakeLi.mouseenter(function(){
// 	$cakeNav.show();
// 	
// })
// $cakeLi.mouseleave(function(){
// 		$cakeNav.hide();
// 	})
	//移入微信图片显示
	var $wImage = $('#wimage');
	var $wImg = $('#wimg');
	$wImage.mouseenter(function(){
		$wImg.show();
		//alert($wIm);
	})
	$wImage.mouseleave(function(){
		$wImg.hide();
	})
	
$(document).ready(function(){
	var i = 0;
	var timer;
	//用jQuery方法设置第一张图片显示，其余隐藏
	$('.item').eq(0).show().siblings('.item').hide();
	//调用showTimer()函数（轮播函数）
	showTime(); 
	//当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
	$('.tab').hover(function(){
		//获取当前i的值，并显示，同时还要清楚定时器
		i = $(this).index();
		Show();
		clearInterval(timer);
	},function(){
		showTime();
	});
	//鼠标点击左侧的箭头
	$('.prev').click(function(){
		clearInterval(timer);
		if(i == 0){
			i = 4;
		}
		i--;
		Show();
		showTime()
	});
	//鼠标点击右侧的箭头
	$('.next').click(function(){
		clearInterval(timer);
		if(i == 4){
			i = -1;
		}
		i ++;
		Show();
		showTime();
	});
	//创建一个showTime函数
	function showTime(){
		timer = setInterval(function(){
			Show();
			i++;
			if(i == 4){
				i = 0;
			}
		},2000);
	}
	//创建一个Show函数
	function Show(){
		$('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
		//给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
		$('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
	}
})
