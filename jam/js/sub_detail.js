
let price = document.querySelector('.total_color');
let detailSildeBtn = document.querySelectorAll('.slide_btn li');
const itemSlide = document.querySelector('.detail_slide');
let sideAtag = document.querySelectorAll('.sidetap')
let sideBtn = document.querySelectorAll('.sidebtn');
let wid = $('.slider').width();
let btn = 0
let w = window.innerWidth;
if(w > 800){for(i=0; i<detailSildeBtn.length; i++){
  addOn(i);  
}
for(let x=0; x<sideAtag.length; x++){
changeSide(x);
}
titleImgAction()

}
autoSlide();
  
// 함수

function autoSlide(){
  setInterval(function(){
    btn++;
    if( btn >2){
        btn = 0;
    }
    $('.slide_btn li').removeClass('on');
    $('.slide_btn li').eq(btn).addClass('on');
    if( btn == '1'){
      itemSlide.setAttribute('style','left:-100%');
    }else if( btn == '2'){
      itemSlide.setAttribute('style','left:-200%');
    }else{
      itemSlide.setAttribute('style','left:0');
    }   
},2000)
}
function titleImgAction(){
  $(window).on("mousewheel", function(){
    let current = $(this).scrollTop();
    let tubeImg = $('.tube').offset().top;
    let point = $('.point_wrap').offset().top;
    $('.detail_title1 ').animate({'top':'1%'},300,function(){
      $('.detail_title2').animate({'top':'6%'},300,function(){
        $('.detail_title3').animate({'top':'10%'},300)
      })
    });
    if(current > tubeImg){
      $('.text2').animate({'opacity':'1'},800);
      $('.text3').animate({'opacity':'1'},800);
      $('.detail_txtaction1').delay(300).animate({'right':'50%'},200);
      $('.detail_txtaction2').delay(300).animate({'left':'50%'},200);
      document.querySelector('.detail_action1 img').setAttribute('src','img/detail_page/detail_itemoff.png');
      $('.detail_action2').delay(300).animate({'opacity':'1'},300);
      $('.detail_action3').delay(300).animate({'opacity':'1'},350);
        
      if(current > point-450){
        $('.point_ico li img ').eq(0).animate({'opacity':'1'},250,function(){
          $('.point_ico li img').eq(1).animate({'opacity':'1'},300,function(){
            $('.point_ico li img').eq(2).animate({'opacity':'1'},350)
          })
        });
      }
    }
  })
  
}
function changeSide(x){
  sideAtag[x].addEventListener('mouseenter',function(){
    sideBtn[x].setAttribute('src','img/detail_page/detail_top_hover.png')})
    sideAtag[x].addEventListener('mouseleave',function(){
      sideBtn[x].setAttribute('src','img/detail_page/detail_top.png')})
}
function addOn(i){
    detailSildeBtn[i].onclick = function(){
        for( j = 0; j<detailSildeBtn.length; j++){
            detailSildeBtn[j].classList.remove('on');
            this.classList.add('on');
            if( i == '1'){
              itemSlide.setAttribute('style','left:-100%');
            }else if( i == '2'){
              itemSlide.setAttribute('style','left:-200%');
            }else{
              itemSlide.setAttribute('style','left:0');
            }   
        }
    };
}
function handleOnChange(e) {
  const text = e.options[e.selectedIndex].text;
  if(text == '70g'){
   price.innerHTML = '4800원'
  }else if(text == '180g'){
    price.innerHTML = '8700원'
  }else {
    price.innerHTML = '0원'
  }
  
}





