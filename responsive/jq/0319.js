$(document).ready(function(){
    //gnb
    $('#gnb li').mouseenter(function(){
        $(this).children('div').fadeIn();
        $(this).children('a').addClass('on');
    });
    $('#gnb li').mouseleave(function(){
        $(this).children('div').fadeOut();
        $(this).children('a').removeClass('on');
    });
    $('.tab li').click(function(e){
        e.preventDefault();
        $('.tab li a').removeClass('on');
        $(this).children('a').addClass('on');

        $('.tab div').fadeOut(0);
        let hr = $(this).children('a').attr('href');
       // console.log(hr);
        $(hr).fadeIn(0)
    });
   let i = 0;
   let speed = 600;
   let timing = 4500;
   let $slider = $('#slider');
   let $pannel = $('.pannel');
   let $nav = $('.nav');
   let $navi = $('.nav li'); 
   let wid = $slider.width();
   let num = $navi.length; 
  
   function doSlider($this){
       $('.nav li a').removeClass('on');
       $this.children('a').addClass('on');
       i = $this.index();
        $pannel.stop().animate({'margin-left':-wid*i},speed);
    };
    
       $navi.click(function(e){
            e.preventDefault();
           let $this = $(this);
           doSlider($this); 
       })

      
   function autoPlay(){
        setInterval(function(){
            i++;
            if( i === num){
                i = 0;
            }
            $navi.children('a').removeClass('on');
            $navi.eq(i).children('a').addClass('on');
            $pannel.stop().animate({'margin-left':-wid*i},speed);
        },timing)
     
   }
   autoPlay();
   
});