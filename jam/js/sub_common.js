$(function(){

    document.querySelector('.topbtn').addEventListener('click',function(e){
        e.preventDefault();
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    })
    
    $('.gnb li').eq(2).mouseenter(
        function(){
            $( '.gnb_submenu' ).stop().slideDown(500);
        }
    );
    $('.gnb li').eq(2).mouseleave(
        function(){
            $( '.gnb_submenu' ).stop().slideUp(500);
        }
    );
    $('.gnb_banner').css('display','block');
    $(window).scroll(function(){
        $('.top_btnhover, .top_btn').css('display','block');
    })
    
    $('.top_btn').hover(
        function(){
            $('.top_btnhover').animate({'bottom':'10%'}, 700);
        },
        function(){
            $('.top_btnhover').animate({'bottom':'5.5%'}, 500);
        }
    )
    
    $('.bars').click(function(e){
        e.preventDefault();
        $('.gnbMobile_wrap').animate({'left':'0%'},500)
    });
    $('.gnbClose').click(function(e){
        e.preventDefault();
        $('.gnbMobile_wrap').animate({'left':'-67%'},300)
    });

    $('.gnbMo li').eq(2).click(function(e){
        e.preventDefault();
        $( '.gnbMo_submenu' ).stop().slideToggle(500);
    });

    $( '.gnbMo_submenu li:first' ).click(function(){
        location.replace('sub_market_jam.html');
    });
    $( '.gnbMo_submenu li:last' ).click(function(){
        location.replace('sub_market_spread.html');
    });
    
});