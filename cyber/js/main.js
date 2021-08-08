'use strict'
const menu = document.querySelector('nav ul');
const aboutSection = document.querySelector('.sec1');
const mediaSection = document.querySelector('.sec5');
const newSection =document.querySelector('.sec6');
const footerSection = document.querySelector('footer');

const gotopBtn = document.querySelector('.gotop');

const navi = document.querySelectorAll('.navi li a');
const mediaActive = document.querySelectorAll('.mediain');
// let mediaNaviList = Array.from(navi);

const section1 = document.querySelector('.sec1');
const section2 = document.querySelector('.sec2');
const section3 = document.querySelector('.sec3');
const section4 = document.querySelector('.sec4');
const section1Text = document.querySelector('.s1Txt');

/*
2.원페이지 스크롤
3.제출버튼 클릭시 팝업창
*/
setTimeout(mainMoveImg, 300)

for(let index = 0 ; index< navi.length; index++){
    navi[index].addEventListener('click',(e)=>{
        e.preventDefault();
        for(let j = 0; j< navi.length; j++){
            navi[j].classList.remove('active');
            navi[index].classList.add('active');
            mediaActive[j].classList.remove('active');
            mediaActive[index].classList.add('active');
        }
    })
}
menu.addEventListener('click',(e)=>{
    let target = e.target
    if(target.tagName === 'LI'){
        if(target.innerText === 'About'){
            aboutSection.scrollIntoView({behavior:'smooth'});
        }else if (target.innerText === 'Media'){
            mediaSection.scrollIntoView({behavior:'smooth'});
        }else if (target.innerText === 'News'){
            newSection.scrollIntoView({behavior:'smooth'});
        }else if (target.innerText === 'Contact'){
            footerSection.scrollIntoView({behavior:'smooth'});
        }
    }
});
window.addEventListener('scroll',()=>{
    let currentTop = document.querySelector('html').scrollTop;
    showGotop()
   
    if(currentTop > section1.offsetTop){
        sec1ScrollEvent();
        if(currentTop > section2.offsetTop-300){
            sec2ScrollEvent();
            if(currentTop > section3.offsetTop-300){
                sec3ScrollEvent();
                if(currentTop > section4.offsetTop-300){
                    sec4ScrollEvent();
                }
            }
        }
      
    }
   
});
gotopBtn.addEventListener('click',()=>{
    document.querySelector('.main').scrollIntoView({behavior:'smooth'})
});

// 함수
function showGotop(){
let currentH = document.querySelector('html').scrollTop;
 let h = aboutSection.getBoundingClientRect().y
    if(currentH > h ){
        gotopBtn.style.opacity = '1';
        showFixMeun();
    }else {
        gotopBtn.style.opacity = '0';
        hideFixMeun();
    }
}
function mainMoveImg(){
    document.querySelector('.imgleft').style.left = '2%'
    document.querySelector('.imgright').style.right = '2%'
}
function showFixMeun(){
    let fixMenu =  document.querySelector('nav ul');
    document.querySelector('header').style.width ='100%'
    document.querySelector('.topLogo').style.opacity = '1';
    fixMenu.style.position = 'fixed';
    fixMenu.style.width = "100%";
    fixMenu.style.padding = '0 20%'
    fixMenu.style.backgroundColor= 'rgba(255, 255, 255, .7)';
}
function hideFixMeun(){
    let fixMenu =  document.querySelector('nav ul');
    document.querySelector('header').style.width ='1200px'
    document.querySelector('.topLogo').style.opacity = '0';
    fixMenu.style.width = "80%";
    fixMenu.style.padding = '20px 0'
    fixMenu.style.backgroundColor= 'transparent';
    fixMenu.style.position = 'static';
}
function sec1ScrollEvent(){
    const imgBg = document.querySelector('.img_wrap');
    imgBg.style.width = '0%'
    section1Text.style.right = '10%'
        setTimeout(function(){
            section1Text.style.transform = 'scale(1) rotate(2deg)';
        },300)
}
function sec2ScrollEvent(){
    const imgBg = document.querySelector('.img_wrap3');
    const subList = document.querySelectorAll('.sec2_subtxt li');
    imgBg.style.right = '-100%'
    setTimeout(function(){
       for(let i = 0 ; i<subList.length; i++){
           subList[i].style.opacity = '1';
       }
    },800)
}
function sec3ScrollEvent(){
    const imgBg = document.querySelector('.img_wrap2');
    const subList = document.querySelectorAll('.sec3_subtxt li');
    imgBg.style.width = '0%'
    setTimeout(function(){
       for(let i = 0 ; i<subList.length; i++){
           subList[i].style.opacity = '1';
       }
    },800)  
}
function sec4ScrollEvent(){
    const imgBg = document.querySelector('.img_wrap4');
    const subList = document.querySelectorAll('.sec4_subtxt li');
    imgBg.style.right = '-100%'
    setTimeout(function(){
       for(let i = 0 ; i<subList.length; i++){
           subList[i].style.opacity = '1';
       }
    },800)
}