$(function(){

    // $('.banner1').hover(
    //     function(){
    //         $('.wrap2').stop().slideDown(600);
    //         $('.banner1').stop().animate({'height':'706px'}, 700);
    //     },
    //     function(){
    //         $('.wrap2').stop().slideUp(600);
    //         $('.banner1').stop().animate({'height':'310px'}, 500);
    //     }
    // )

    // $('.banner2').hover(
    //     function(){
    //         $('.wrap4').stop().slideDown(600);
    //         $('.banner2').stop().animate({'height':'706px'}, 700);
    //     },
    //     function(){
    //         $('.wrap4').stop().slideUp(600);
    //         $('.banner2').stop().animate({'height':'310px'}, 500);
    //     }
    // )

    // $('.banner3').hover(
    //     function(){
    //         $('.wrap6').stop().slideDown(600);
    //         $('.banner3').stop().animate({'height':'706px'}, 700);
    //     },
    //     function(){
    //         $('.wrap6').stop().slideUp(600);
    //         $('.banner3').stop().animate({'height':'310px'}, 500);
    //     }
    // )

    // $('.banner4').hover(
    //     function(){
    //         $('.wrap8').stop().slideDown(600);
    //         $('.banner3').stop().animate({'height':'706px'}, 700);
    //     },
    //     function(){
    //         $('.wrap8').stop().slideUp(600);
    //         $('.banner4').stop().animate({'height':'310px'}, 500);
    //     }
    // )

    slide();
    function slide(){
        $('.banner').hover(
            function(){
                $(this).children('.wrap2').stop().slideDown(600);
                $(this).stop().animate({'height':'706px'}, 700);
            },
            function(){
                $(this).children('.wrap2').stop().slideUp(600);
                $(this).stop().animate({'height':'310px'}, 500);
            }
        )
    }
    

})