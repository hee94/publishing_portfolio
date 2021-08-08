$(document).ready(function(){
    $('.tabcon1').show();

    $('.btn').click(function(e){
        e.preventDefault();
        $('.btn').removeClass('on');
        $(this).addClass('on');
    })

    $('.btn1').click(function(e){
        e.preventDefault();
        $('.tabcon2, .tabcon3').hide();
        $('.tabcon1').fadeIn(100);
    })
    $('.btn2').click(function(e){
        e.preventDefault();
        $('.tabcon1, .tabcon3').hide();
        $('.tabcon2').fadeIn(100);
    })
    $('.btn3').click(function(e){
        e.preventDefault();
        $('.tabcon1, .tabcon2').hide();
        $('.tabcon3').fadeIn(100);
    })

    $('.tabcon1 h4').click(function(){
        $(this).next().slideToggle(500);
        // $('.tabcon1 h4').css('border-bottom', 'none');
        // $(this).css('border-bottom', '1px solid var(--mainC_P)');
    })

    $('.tabcon2 h4').click(function(){
        $(this).next().slideToggle(500);
    })

    $('.mobile_pg h4').click(function(){
        $(this).next().slideToggle(500);
    })

})
