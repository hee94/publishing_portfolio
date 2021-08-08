
'use strict'

const slide = document.querySelector('.slide_box');
const slideList = document.querySelectorAll('.slide_box li');
let slideNum = 0;
const len = slideList.length;
const slideBtn = document.querySelector('#slidebtn');
const slideBtnOn =document.querySelectorAll('#slidebtn li a')
let i =1;
let index = 1;
const slideBtnLi =document.querySelectorAll('#slidebtn li')
const firstItemClone = slide.firstElementChild.cloneNode(true);
const infoWrap = document.querySelector('#info_wrap');
const scrollEventH = infoWrap.getBoundingClientRect();

const activeText1 = document.querySelector('.box1_txt');
const activebox1 = document.querySelector('.info_box1 h5');
const activeboxicon1 = document.querySelector('.info_box1 i');
const activebox2 = document.querySelector('.box2_txt');
slide.appendChild(firstItemClone);
const mobileBtn =document.querySelector('.m_btn');
const Mmenu =document.querySelector('.m_menu');
let w = window.innerWidth;


mobileBtn.addEventListener('click',showMobileMenu
)

if( w >1024){
moveSlide()
moveBtnClick()
window.addEventListener('scroll',(e) =>{
    let currentY = document.querySelector('html').scrollTop;
    if(currentY > scrollEventH.y-400 ){
        infoAction()
    }
})
}

//함수
function showMobileMenu(){
    Mmenu.classList.toggle("hidemenu");
}
function infoAction(){
    activeText1.style.transition = '1.2s';
    activebox1.style.transition = '1.3s';
    activeboxicon1.style.transition = '1.3s';
    activebox2.style.transition = '1.3s';
    activeText1.style.top = 0;
    activebox1.style.opacity = 1;
    activeboxicon1.style.opacity = 1;
    activebox2.style.top = 0;
}
function moveBtnClick(){
    slideBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        if(event.target.tagName === 'A'){
            slideBtnOn[0].classList.remove('on');
            slideBtnOn[1].classList.remove('on');
            slideBtnOn[2].classList.remove('on');
            event.target.classList.add('on');
            slide.style.transition = '1s';
            if(event.target === slideBtnOn[1]){
                slide.style.transform = `translate3d(-1200px, 0px, 0px)`;
            }else if(event.target === slideBtnOn[2]){
                slide.style.transform = `translate3d(-2400px, 0px, 0px)`;
            }else{
                slide.style.transform = "translate3d(0px, 0px, 0px)";
            }
          
        }
    })
}
function moveSlide(){
  setInterval(() => {
    slide.style.transition = '1s';
    slide.style.transform = `translate3d(-${1200*i}px, 0px, 0px)`;
    i++; 
       btnOnroling()
    if(i === 4){
        setTimeout(function(){
            slide.style.transition = '0s';
            slide.style.transform = "translate3d(0px, 0px, 0px)";
        },1001)
        i = 1;
    }
  }, 4000);       
}
function btnOnroling(){
  
    if(index >2){
        index = 0;
    }
    slideBtnOn[0].classList.remove('on');
    slideBtnOn[1].classList.remove('on');
    slideBtnOn[2].classList.remove('on');
    slideBtnOn[index].classList.add('on');
    index++;
}