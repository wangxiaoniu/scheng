$(document).ready(function(){
	// 头部导航选中切换
 $(".nav").find("li").click(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
        });

 // main导航选中状态切换

  $('.nav_tab li a').click(function(){
        	$(this).addClass("active");
        	$(this).parent("li").siblings("li").find("a").removeClass("active");
        	var index = $(this).index();
        	$('.main_content').eq(index).show().addClass('active').siblings().removeClass('active').hide();
        });
});