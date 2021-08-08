$(function(){

    $('.thum_wrap1 a').click(function(){
        let path = $(this).attr('href');
        $('.left_wrap1 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},300);
        return false
    });

    $('.thum_wrap2 a').click(function(){
        let path = $(this).attr('href');
        $('.right_wrap2 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},300);
        return false
    });

    $('.thum_wrap3 a').click(function(){
        let path = $(this).attr('href');
        $('.left_wrap3 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},300);
        return false
    });


    $('.map_btn1').click(function(e){
        e.preventDefault();
        $('.map_view1').fadeIn(700);
    });
    $('.close1').click(function(e){
        e.preventDefault();
        $('.map_view1').fadeOut(400);
    });

    $('.map_btn2').click(function(e){
        e.preventDefault();
        $('.map_view2').fadeIn(700);
    });
    $('.close2').click(function(e){
        e.preventDefault();
        $('.map_view2').fadeOut(400);
    });

    $('.map_btn3').click(function(e){
        e.preventDefault();
        $('.map_view3').fadeIn(700);
    });
    $('.close3').click(function(e){
        e.preventDefault();
        $('.map_view3').fadeOut(400);
    });

});