$(document).ready(function(){
    
    $('.buy_btn').click(function(e){
        e.preventDefault();
        $('.tab a').removeClass('on');
        $(this).addClass('on');
        $('.my_list_wrap2').fadeIn();
        $('.my_list_wrap1').hide();
    })

    delivery();
    function delivery(){
        $('.del_btn').click(function(e){
            e.preventDefault();
            $('.tab a').removeClass('on');
            $(this).addClass('on');
            $('.my_list_wrap1').fadeIn();
            $('.my_list_wrap2').hide();
        })
    }
    

    // if($("input:checkbox[id='switch']").is(":checked") == true){
    //     delivery();
    // }else if($("input:checkbox[id='switch']").is(":checked") == false){
    //     $('.del_btn').click(function(e){
    //         e.preventDefault();
    //         alert('정기구독을 체크해주세요!');
    //     })
    // }

    $('.benefits').hover(
        function(){
            $('.speech_bubble1').fadeIn(500);
        },
        
        function(){
            $('.speech_bubble1').fadeOut(500);
        }
    )

    $('.next_rank').hover(
        function(){
            $('.speech_bubble2').fadeIn(500);
        },
        
        function(){
            $('.speech_bubble2').fadeOut(500);
        }
    )

    $('.info_coupon').hover(
        function(){
            $(this).attr('src','img/sub_mypage/my_info_img2_hover.png');
        },
        
        function(){
            $(this).attr('src','img/sub_mypage/my_info_img2.png');
        }
    )

    $('.info_point').hover(
        function(){
            $(this).attr('src','img/sub_mypage/my_info_img3_hover.png');
        },
        
        function(){
            $(this).attr('src','img/sub_mypage/my_info_img3.png');
        }
    )

    $('.info_chat').hover(
        function(){
            $(this).attr('src','img/sub_mypage/my_info_img4_hover.png');
        },
        
        function(){
            $(this).attr('src','img/sub_mypage/my_info_img4.png');
        }
    )


    let i = 0;
    let box1 = $('.list_slider1');
    let len1 = $('.list_slider1 li').length;
    let box2 = $('.list_slider2');
    let len2 = $('.list_slider2 li').length;
    let isAnimated = false;
    let timer;

    $('.prev1').click(function(e){
        e.preventDefault();
        prev1();
    });
    
    $('.next1').click(function(e){
        e.preventDefault();
        next1();
    });

    $('.prev2').click(function(e){
        e.preventDefault();
        prev2();
    });
    
    $('.next2').click(function(e){
        e.preventDefault();
        next2();
    });

    function prev1(){
        i=2;
        if(0<i){
            box1.animate({'left':'0'},500);
            i--;
            $('.next1').show();
            $('.prev1').hide();
        }
    }

    function next1(){
        i=0;
        if(1>i){
            box1.animate({'left':'-62%'},500);
            i++;
            $('.prev1').show();
            $('.next1').hide();
            
        }
    }

    function prev2(){
        i=2;
        if(0<i){
            box2.animate({'left':'0'},500);
            i--;
            $('.next2').show();
            $('.prev2').hide();
        }
    }

    function next2(){
        i=0;
        if(1>i){
            box2.animate({'left':'-62%'},500);
            i++;
            $('.prev2').show();
            $('.next2').hide();
        }
    }
    

})