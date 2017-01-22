$(document).ready(function(){
	// 头部导航选中切换
 $(".nav").find("li").click(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
        });

 // main导航选中状态切换
  $('.nav_tab li a').click(function(){
        	$(this).addClass("active");
        	$(this).parent("li").siblings("li").find("a").removeClass("active");
        });

  // main内div 隐藏显示切换
  $('#tab1').click(function(){
  		$('.main_content1').show();
  		$('.main_content2').hide();

  });
  $('#tab2').click(function(){
  		$('.main_content2').show();
  		$('.main_content1').hide();

  });
  // 排序切换
 	$(".main_content2_info em a").click(function(){
 		$(this).addClass("active").siblings("a").removeClass("active");
 	});
 	
});