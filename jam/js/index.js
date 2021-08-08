$(function(){
 //변수
    let side = document.querySelectorAll('.scroll_btn li');
    let i,j;
    let recipe = document.querySelector('.sec4_ico_hover');
    const main = document.querySelector('main');
    const sec1 = document.getElementById('sec1');
    const sec2 = document.getElementById('sec2');
    const sec3 = document.getElementById('sec3');
    const sec4 = document.getElementById('sec4');
    const sec5 = document.getElementById('sec5');
    const sec6 = document.getElementById('sec6');
    const sec7 = document.getElementById('sec7');
    let w = window.innerWidth;
//함수실행   
if(w > 800){
  for(i=0; i<side.length; i++){
    addOn(i);  
    }
    recipeHover();
    mainMoving1();
    setInterval(mainMoving2,200);
    scrollAddOn();
}
    

//함수
    function scrollAddOn(){
      $(window).scroll(function(){
        let mainTop = $(main).offset().top;
        let sec1Top = $(sec1).offset().top;
        let sec2Top = $(sec2).offset().top;
        let sec3Top = $(sec3).offset().top;
        let sec4Top = $(sec4).offset().top;
        let sec5Top = $(sec5).offset().top;
        let sec6Top = $(sec6).offset().top;
        let sec7Top = $(sec7).offset().top;
        let current = $(this).scrollTop();
        if(current <= sec1Top){
          $('.scroll_btn li').removeClass('on');
          $('.scroll_btn li').eq(0).addClass('on')
        }
        if(current >= sec1Top){
          delivery();
            $('.scroll_btn li').removeClass('on');
            $('.scroll_btn li').eq(1).addClass('on')
          if(current >= sec2Top){
            $('.scroll_btn li').removeClass('on');
            $('.scroll_btn li').eq(2).addClass('on');
            if(current >= sec3Top){
              $('.scroll_btn li').removeClass('on');
              $('.scroll_btn li').eq(3).addClass('on');
              if(current >= sec4Top){
                $('.scroll_btn li').removeClass('on');
                $('.scroll_btn li').eq(4).addClass('on');
                if(current >= sec5Top){
                  $('.scroll_btn li').removeClass('on');
                  $('.scroll_btn li').eq(5).addClass('on');
                  if(current >= sec6Top){
                    $('.scroll_btn li').removeClass('on');
                    $('.scroll_btn li').eq(6).addClass('on');
                    $('#sec6 h1, #sec6 p, .day').animate({'opacity':'1'},500)
                    if(current >= sec7Top){
                      $('.scroll_btn li').removeClass('on');
                      $('.scroll_btn li').eq(7).addClass('on');
                     
                    }
                  }
                }
              }
            }
          }
          }
          
      })
    }
    
    $('.sec4_ico li:nth-child(1)').hover(
      function(){
          $('.speech_bubble').stop().fadeIn(400);
      },
      
      function(){
          $('.speech_bubble').stop().fadeOut(400);
      }
  )
    // 
    function delivery() {
      $('.sec1_char1').stop().fadeIn(function(){
        $(this).stop().animate({'right':'53%'},3000)
        $('.delivery_ico li:nth-child(1)').stop().animate({'opacity':'1'}, 500, function(){
            $('.delivery_ico li:nth-child(2)').stop().animate({'opacity':'1'}, 500, function(){
                $('.delivery_ico li:nth-child(3)').stop().animate({'opacity':'1'}, 500, function(){
                    $('.delivery_ico li:nth-child(4)').stop().animate({'opacity':'1'}, 500, function(){
                        $('.delivery_ico li:nth-child(1)').stop().animate({'marginTop':'0'}, 800)
                        $('.delivery_ico li:nth-child(2)').stop().animate({'marginTop':'0'}, 800)
                        $('.delivery_ico li:nth-child(3)').stop().animate({'marginTop':'0'}, 800)
                        $('.delivery_ico li:nth-child(4)').stop().animate({'marginTop':'0'}, 800, function(){
                            $('.sec1_btn').stop().fadeIn(500);
                        })
                    })
                })
            })
        })
    })
    }
    function recipeHover(){
      recipe.addEventListener('mouseenter',function(){
        recipe.setAttribute('src','img/index/sec4_ico1_basic.png')
      })
      recipe.addEventListener('mouseleave',function(){
        recipe.setAttribute('src','img/index/sec4_ico1.png')
      })
    }
    function addOn(i){
        side[i].onclick = function(){
            for( j = 0; j<side.length; j++){
                side[j].classList.remove('on');
                this.classList.add('on');
                if( i === 0){
                    main.scrollIntoView({behavior:'smooth'});
                }else if( i=== 1){
                  sec1.scrollIntoView({behavior:'smooth'});
                }else if( i=== 2){
                  sec2.scrollIntoView({behavior:'smooth'});
                }else if( i=== 3){
                  sec3.scrollIntoView({behavior:'smooth'});
                }else if( i=== 4){
                  sec4.scrollIntoView({behavior:'smooth'});
                }else if( i=== 5){
                  sec5.scrollIntoView({behavior:'smooth'});
                }else if( i=== 6){
                  sec6.scrollIntoView({behavior:'smooth'});
                }else {
                  sec7.scrollIntoView({behavior:'smooth'});
                }
            }
          }}
    function mainMoving1(){
        $('.main_title2').animate({'opacity':'1'},500)
        $('.main_title li').eq(0).animate({'top':'41%','left':'33%'},300).animate({'top':'24%'},200).animate({'top':'41%'},300,'easeOutBounce');
        $('.main_title li').eq(1).animate({'top':'41%','left':'38%'},300).animate({'top':'27%'},300).animate({'top':'41%'},300,'easeOutBounce');
        $('.main_title li').eq(2).animate({'top':'41%','left':'42%'},300).animate({'top':'30%'},300).animate({'top':'41%'},300,'easeOutBounce');
        $('.main_title li').eq(3).animate({'top':'41%','left':'46%'},300,).animate({'top':'34%'},300).animate({'top':'41%'},300,'easeOutBounce');
        // make
        $('.main_title li').delay(50).eq(4).animate({'top':'41%','left':'55%'},200).animate({'top':'24%'},200).animate({'top':'41%'},200,'easeOutBounce');
        $('.main_title li').delay(50).eq(5).animate({'top':'41%','left':'59%'},200,'easeOutBounce').animate({'top':'27%'},200).animate({'top':'41%'},200,'easeOutBounce');
        $('.main_title li').delay(50).eq(6).animate({'top':'41%','left':'61.5%'},200).animate({'top':'30%'},200).animate({'top':'41%'},200,'easeOutBounce');
        $('.main_title li').delay(50).eq(7).animate({'top':'41%','left':'65%'},200,'easeInBounce').animate({'top':'34%'},200).animate({'top':'41%'},200,'easeOutBounce');
        // life
        $('.main_title li').delay(150).eq(9).animate({'top':'41%','left':'76.5%'},300,'easeInOutElastic');
        $('.main_title li').delay(150).eq(10).animate({'top':'41%','left':'81%'},300,'easeOutBounce');
        $('.main_title li').delay(150).eq(8).animate({'top':'45%','left':'73%'},300).animate({'top':'41%'},200,'easeInOutElastic');
        //fun
        $('.char1').animate({'top':'20%','right':'-400px'},800).animate({'right':'0','top':'30px'},600)
    }
     function mainMoving2(){
    $('.char2').animate({'left':'110%'},28000).animate({'bottom':'-50%'}).animate({'left':'-10%'}).animate({'bottom':'10px'})
    }

    



})