var tr = true;
$(document).ready(function(){
    // $('.col-xs-6.col-sm-6.col-md-6').css('border-left', '2px solid green');
    // $("li:nth-child(1)").click(function(){

    //     $("html").animate({scrollTop:$(".lifePage").offset().top},500);   
    // });
    // $("li:nth-child(2)").click(function(){
    //     $("html").animate({scrollTop:$(".careerPage").offset().top},500);   
    // });
    // $("li:nth-child(3)").click(function(){
    //     // $(this).toggleClass("act");
    //     $("html").animate({scrollTop:$(".portPage").offset().top},500);
    // });
    $(window).scroll(function(){
        var careerHei = $('.careerPage').offset().top;
        var portHei = parseInt($('.portPage').offset().top);
        var htmlHei = $('html').scrollTop();
        if($(window).scrollTop()>=careerHei && tr){
            $('.careerPage .container').css({'transform':'scale(1)'});
            tr = !tr;
            console.log(tr);
        }
        if(htmlHei>0){
            $('.navbar').css({'background':'#4f404a','boxShadow':'0px 5px 10px black'});
        }
        if(htmlHei==0){
            $('.navbar').css({'background':'transparent','boxShadow':'none'});
        }
        if(careerHei>=htmlHei>=0){
            $(".mao li").removeClass('act');
            $("li:nth-child(1)").addClass('act');
        }
        if(htmlHei>=careerHei){
            $(".mao li").removeClass('act');
            $("li:nth-child(2)").addClass('act');
            
        }
        if(htmlHei>=portHei){
            $(".mao li").removeClass('act');
            $("li:nth-child(3)").addClass('act');
        }
    });
    $(window).resize(function(){
        $('footer a').css("fontSize",0.05*$(window).width()+"px");
    })

})