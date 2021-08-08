$(function(){

    // let k = 0;
    // let $slide = $('.slide1 li');
    // let $btn = $('.slide_btn li');
    // let num = $btn.length;


    // slide();
    // function slide(){
    //     $btn.trigger('click',function(e){
    //         e.preventDefault();
    //         let index = $(this).index(); //index값에 담아놓고
    //         k = index; // i값을 index값과 동일하게 바꿔줌
    //         $btn.removeClass('on');
    //         $(this).addClass('on');
    //         s1();
    //     })
    //     s1();
    // }

    let i=1;

    setInterval(s1,4000);
    s1();

    function s1(){
        if ( $(window).width() > 800){
            
            $('.slide1 li').fadeOut(function(){
                $('.slide1 li').eq(i).fadeIn(700, function(){
                    $(this).children('.slide_title').fadeIn(700, function(){
                        $('.slide1 li').eq(i).children('.round_img').fadeIn(function(){
                            $('.slide1 li').eq(i).find('.in1').animate({'left':'28%'}, 700);
                            $('.slide1 li').eq(i).find('.in2').animate({'right':'25%'}, 700);
                            // $('.slide1 li:eq(0)').find('.in2').fadeIn();
                        });
                    });
                });
            });
            
            i++;
            if(i>2){i=0;}
        }else{
            $('.slide1 li').fadeOut(function(){
                $('.slide1 li').eq(i).fadeIn(700, function(){
                    $(this).children('.slide_title').fadeIn(700, function(){
                        $('.slide1 li').eq(i).children('.round_img').fadeIn(function(){
                            $('.slide1 li').eq(i).find('.in1').animate({'left':'28%'}, 700);
                            $('.slide1 li').eq(i).find('.in2').animate({'right':'20%'}, 700);
                        });
                    });
                });
            });
            
            i++;
            if(i>2){i=0;}
        }
    }

});