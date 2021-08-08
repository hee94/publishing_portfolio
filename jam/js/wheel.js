$(function(){

    if ($(window).width() > 801){
        scroll();
    }
    
    function scroll(){
        const win_h = $(window).height();
        
        $('section').each(function(index){
        $(this).attr("data-index",win_h * index);
        });
        
        $('section').on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        e.stopPropagation();
        const sectionPos = parseInt($(this).attr('data-index'));
        
        if(e.originalEvent.wheelDelta >= 0) {
            $('html, body').stop().animate({scrollTop:sectionPos - win_h},600);
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $('html, body').stop().animate({scrollTop:sectionPos + win_h},600);
            return false;
        }
        });


    //     var timeout;

    // // 휠이벤트가 발생하면
    // window.onwheel = function(){
    //     clearTimeout(timeout);  //이전 휠 이벤트 제거
    //     timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
    //         // to do
    //     }, 1000);
    // };
}

    // var flag = false; 

    // $("html, body").on('mousewheel DOMMouseScroll', function(e) { var E = e.originalEvent; eventValues = 0; 
    //     if (E.detail){ 
    //         eventValues = E.detail * -40; 
    //     }else{ 
    //         ventValues = E.wheelDelta; 
    //     }; 
    //     var scmove = $(this).height() - $("section").height(); 
    //     if(eventValues == -120 && !flag){
    //         flag = true; $('html, body').animate({ scrollTop : '+='+scmove }, 2000 ,function(

    //         ){ flag = false; }); }; 
    //         if(eventValues == 120 && !flag){ 
    //             flag = true; $('html, body').animate( { scrollTop : '-='+scmove }, 2000 ,function(

    //             ){ flag = false; }); }; });


    // var timeout;

    // // 휠이벤트가 발생하면
    // window.onwheel = function(){
    //     clearTimeout(timeout);  //이전 휠 이벤트 제거
    //     timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
    //         // to do
    //     }, 1000);
    // };

    

})

