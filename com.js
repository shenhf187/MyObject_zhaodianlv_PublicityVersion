$(function(){
	$("a,input,button").focus(function(){this.blur()});
	
	$('.banner-btnbox span').css('opacity','.5');
	$('.banner-btnbox span').eq(0).css('opacity','1');
	var bannerPic=1;
//	导航部分划过之后的效果
	$('#nav li a').hover(function(){
//		$(this).css('opacity','0.5');
		$(this).css('border-radius','5px');
//		$(this).css('color','#fff');
		$(this).css('background-color','#f7f7f7');
	},function(){
		$(this).css('opacity','1');
//		$(this).css('color','#1f1f1f');
		$(this).css('background-color','0');
	})
	
//	轮播图banner函数
	function bannerChange(){
		if(bannerPic == 3){
			bannerPic = 0;
		}
		$('.banner-btnbox span').css('opacity','.5');
		$('.banner-btnbox span').eq(bannerPic).css('opacity','1');
		$('.banner-pic').removeClass('banner-current');
		$('.banner-pic').eq(bannerPic).addClass('banner-current');
		bannerPic ++;
	}
	var bannerTimer = setInterval(bannerChange,5000);
//	按钮控制的部分
	$('.banner-btnbox span').hover(function(){
		clearInterval(bannerTimer);
		$('.banner-btnbox span').css('opacity','.5');
		$(this).css('opacity','1');
		bannerPic = $(this).index();
		$('.banner-pic').removeClass('banner-current');
		$('.banner-pic').eq(bannerPic).addClass('banner-current');
	},function(){
		bannerTimer = setInterval(bannerChange,5000);
	})
})
