'use scrict'
const thumbnail = document.querySelector('.thumbnail_list');
const thumbnailList = document.querySelectorAll('.thumbnail_list li');
const thumb = document.querySelectorAll('.thumb');
const logo = document.querySelectorAll('.logo');
const mockUpWeb = document.querySelector('.web img');
const mockUpM = document.querySelector('.mobile img');
const portpolieBox = document.querySelectorAll('.pf_info');     
const lineBox1 = document.querySelector('.img_line');
const resume =document.querySelector('#resume')
const scrollEvent = resume.getBoundingClientRect();
const gnbToggleBtn = document.querySelector('.gnb_btn');
const MenuList = document.querySelectorAll('.gnb li');
const footer = document.querySelector('footer').getBoundingClientRect();

const nextBtn =document.querySelector('.next');
const prveBtn =document.querySelector('.prve');

const moreBtn = document.querySelector('.more_btn');

setTimeout(actionMain,500);

window.addEventListener('scroll',()=>{
    let current = document.querySelector('html').scrollTop;
    if(current > scrollEvent.y -150){
        actionResume();
    }
});
nextBtn.addEventListener('click',()=>{
    moveNext();
 })
 prveBtn.addEventListener('click',()=>{
     movePrve();
 })

gnbToggleBtn.addEventListener('click',()=>{
    showMenu();
})
scrollToSection();

function scrollToSection(){
    MenuList[0].addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector('#main').scrollIntoView({behavior:'smooth'});
    })
    MenuList[1].addEventListener('click',(e)=>{
        e.preventDefault();
        resume.scrollIntoView({behavior:'smooth'});
    })
    MenuList[2].addEventListener('click',(e)=>{
        e.preventDefault();
        thumbnail.scrollIntoView({behavior:'smooth'});
    })
    MenuList[3].addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector('footer').scrollIntoView({behavior:'smooth'});
    })
}
function showMenu(){
    const menu = document.querySelector('.gnb');
    menu.classList.toggle("hidemenu");
}
function initThumbnail(i){
    let imgSrc = i;
       mockUpWeb.setAttribute('src', `img/${imgSrc}_web.png`);
       mockUpM.setAttribute('src', `img/${imgSrc}_m.png`);
}
function moveNext(){
    let NowWebIndex = mockUpWeb.getAttribute('src');
    let btnAddOn = document.querySelectorAll('.more_btn');
    for(let j = 1; j<=thumbnailList.length; j++){ 
        btnAddOn[j-1].classList.remove('btn_on');
        document.querySelector(`.protfolie${j}`).style.opacity = '0'
       
        if(NowWebIndex === 'img/0_web.png'){
           mockUpWeb.setAttribute('src', 'img/1_web.png');
           mockUpM.setAttribute('src', 'img/1_m.png');
           document.querySelector('.protfolie2').style.opacity ='1';
          
           btnAddOn[1].classList.add('btn_on');
        }else if (NowWebIndex === 'img/1_web.png'){
           mockUpWeb.setAttribute('src', 'img/2_web.png');
           mockUpM.setAttribute('src', 'img/2_m.png');
           document.querySelector('.protfolie3').style.opacity ='1';
         
           btnAddOn[2].classList.add('btn_on');
        }else if (NowWebIndex === 'img/2_web.png'){
           mockUpWeb.setAttribute('src', 'img/3_web.png');
           mockUpM.setAttribute('src', 'img/3_m.png');
           document.querySelector('.protfolie4').style.opacity ='1';
         
           btnAddOn[3].classList.add('btn_on');
        } else {
           mockUpWeb.setAttribute('src', 'img/0_web.png');
           mockUpM.setAttribute('src', 'img/0_m.png');
           document.querySelector('.protfolie1').style.opacity ='1';
         
          btnAddOn[0].classList.add('btn_on');
        }
    }

}
function movePrve(){
    let NowWebIndex = mockUpWeb.getAttribute('src');
    let btnAddOn = document.querySelectorAll('.more_btn');
    for(let j = 1; j<=thumbnailList.length; j++){
       
        btnAddOn[j-1].classList.remove('btn_on');
        document.querySelector(`.protfolie${j}`).style.opacity = '0';
         if (NowWebIndex === 'img/1_web.png'){
            mockUpWeb.setAttribute('src', 'img/0_web.png');
            mockUpM.setAttribute('src', 'img/0_m.png');
            document.querySelector('.protfolie1').style.opacity ='1';
              
             btnAddOn[0].classList.add('btn_on');
         }else if (NowWebIndex === 'img/2_web.png'){
            mockUpWeb.setAttribute('src', 'img/1_web.png');
            mockUpM.setAttribute('src', 'img/1_m.png');
            document.querySelector('.protfolie2').style.opacity ='1';
              
             btnAddOn[1].classList.add('btn_on');
         }else if (NowWebIndex === 'img/3_web.png'){
            mockUpWeb.setAttribute('src', 'img/2_web.png');
            mockUpM.setAttribute('src', 'img/2_m.png');
            document.querySelector('.protfolie3').style.opacity ='1';
              
            btnAddOn[2].classList.add('btn_on');
         }else{
            mockUpWeb.setAttribute('src', 'img/3_web.png');
            mockUpM.setAttribute('src', 'img/3_m.png');
            document.querySelector('.protfolie4').style.opacity ='1';
                
            btnAddOn[3].classList.add('btn_on');
         };
    };
};
function showPtbox(i){
    for(let j = 1; j<=thumbnailList.length; j++){
        let num = i+1;
        let btnAddOn = document.querySelectorAll('.more_btn')
      
        document.querySelector(`.protfolie${j}`).style.opacity = '0';
        btnAddOn[j-1].classList.remove('btn_on');
        
        document.querySelector(`.protfolie${num}`).style.opacity ='1';
        btnAddOn[i].classList.add('btn_on');
    }
}
function actionMain(){
    line1 = document.querySelector('.line1').style.height = '363px';
    line2 = document.querySelector('.line2').style.height = '227px';
    line3 = document.querySelector('.line3').style.height = '301px';
    line4 = document.querySelector('.line4').style.height = '152px';
    line5 = document.querySelector('.line5').style.height = '109px';
    lineBox1.style.width = '600px';
    document.querySelector('.main_img img').style.opacity = 1;
}
function actionResume(){
    document.querySelector('.resume_title').style.top = '0px';
}

   
    
