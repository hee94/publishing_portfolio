$(document).ready(function(){

    if ($(window).width() > 801){
        card();
    }

    function card(){

        $('.sec2_jam').hover(
            function(){
                $(this).css('z-index','4');
                $('.sec2_spread').css('z-index','1');
                
                $('.sec2_char_left').finish().fadeIn(function(){
                    $('.sec2_spread').clearQueue().stop().animate({transform: 'translateY(-30px) translateX(-300px) scale(0.5)'}, 800);
                    $('.sec2_jam').stop().animate({transform: 'translateX(300px) translateY(50px)'}, 800, function(){
                        $('.sec2_spread').stop().animate({'opacity':'0'}, 100);
                    })
                    $('.sec2_char_left').stop().animate({transform: 'translateX(200px)'}, 800)
                    })
            },
            function(){
                $('.sec2_spread').stop().animate({'opacity':'1'}, 100, function(){
                    $('.sec2_spread').stop().animate({transform: 'translateY(0px) translateX(0px) scale(1)'}, 800);
                });
                $('.sec2_jam').stop().animate({transform: 'translateX(0px) translateY(0px)'}, 1000);
                $('.sec2_char_left').stop().animate({transform: 'translateX(0px)'}, 800, function(){
                    $('.sec2_char_left').stop().fadeOut(800);
                });
                
            })
    
        $('.sec2_spread').hover(
            function(){
                $(this).css('z-index','4');
                $('.sec2_jam').css('z-index','1');
                
                $('.sec2_char_right').finish().fadeIn(function(){
                    $('.sec2_jam').clearQueue().stop().animate({transform: 'translateY(30px) translateX(300px) scale(0.5)'}, 800);
                    $('.sec2_spread').animate({transform: 'translateX(-300px) translateY(-80px)'}, 800, function(){
                        $('.sec2_jam').stop().animate({'opacity':'0'}, 100);
                    })
                    $('.sec2_char_right').animate({transform: 'translateX(-250px) translateY(-80px)'}, 800)
                })
                
    
            },
            function(){
                $('.sec2_jam').stop().animate({'opacity':'1'}, 100, function(){
                    $('.sec2_jam').stop().animate({transform: 'translateY(0px) translateX(0px) scale(1)'}, 800);
                });
                $('.sec2_spread').stop().animate({transform: 'translateX(0px) translateY(0px)'}, 800);
                $('.sec2_char_right').stop().animate({transform: 'translateX(0px) translateY(0px)'}, 800, function(){
                    $('.sec2_char_right').stop().fadeOut(800);
                })
                
            })

    }
    
})