$(document).ready(function(){
 $(".nav").find("li").click(function(){
            $(this).addClass("active").siblings("li").removeClass("active");
        });
});