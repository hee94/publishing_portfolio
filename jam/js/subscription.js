$(function(){
    let benefitTop = $('.benefit').offset();
    let reviewTop = $('.review').offset();
    let choList = document.querySelector('.cho_list');
    let choList2 = document.querySelector('.cho_list2');
    const itemRow = document.querySelector('.item_row');
    let itemRowLi = document.querySelectorAll('.item_row li');
    
    // $('.menu li').click(function(){
    //     $('.menu li').removeClass('active');
    //     $(this).addClass('active');
    //     return 0;
    // })
    $('.tab_menu li').eq('0').click(function(e){
        e.preventDefault();
        $('.tab_container').css('display','block');
        $('#randombox').css('display','none');
    })
    $('.tab_menu li').eq('1').click(function(e){
        e.preventDefault();
        $('.tab_container').css('display','none')
        $('#randombox').css('display','block');
    })

    if ($(window).width() > 800){
        $('.menu li').eq(1).click(function(){
            $("html, body").animate({scrollTop: benefitTop.top-100}, 400)
        })
        $('.menu li').eq(2).click(function(){
            $("html, body").animate({scrollTop: reviewTop.top-120}, 400)
        })
    }else if($(window).width() < 800){
        $('.menu li').eq(1).click(function(){
            $("html, body").animate({scrollTop: benefitTop.top-50}, 400)
        })
        $('.menu li').eq(2).click(function(){
            $("html, body").animate({scrollTop: reviewTop.top-50}, 400)
        })
    }
    


   $('.calendar li ').click(function(e){
       e.preventDefault(); 
       let indexNum = $(this).index();
       if(indexNum == 0){
        $('.date').html('매달 5일');
       }else if ( indexNum == 1){
        $('.date').html('매달 15일');
       }
       else if ( indexNum == 2){
        $('.date').html('매달 20일');
       }else{
        $('.date').html('매달 25일');
       }
   })
   $('.arrow_right').click(function(){
       $('.container_in').animate({'margin-left':'-100%'},500);
       $('.cho_title').html('스프레드')
       $(this).css('display','none');
       $('.arrow_left').css('display','block')
   }) 
   $('.arrow_left').click(function(){
    $('.container_in').animate({'margin-left':'0'},500);
    $('.cho_title').html('잼')
    $(this).css('display','none');
    $('.arrow_right').css('display','block')
}) 
   choList.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        if(itemRow.childElementCount <5){
            addList(e);
        } else if(itemRow.childElementCount >= 5){
                alert('5개이상 선택 불가합니다');
            }
    }
    });
    choList2.addEventListener('click',function(e){
        if(e.target.tagName === 'LI'){
            if(itemRow.childElementCount <5){
                addList(e);
            }else if(itemRow.childElementCount >= 5){
                alert('5개이상 불가');
            }
        }
        console.log(itemRow.childElementCount)
        });
    document.querySelector('.buybtn').addEventListener('click',()=>{
        confirm('결제창으로 넘어가시겠습니까?');
        
    })
    
    // 함수
    // function limitNum(){
    //     let itemRowLi = document.querySelectorAll('.item_row li');
    //     if(itemRowLi)
    // }
   function addList(e){
        let itemLi = document.createElement('li');
        let itemColor = document.createElement('div');
        // let choColor =  e.target.className;
        // console.log(choColor);
        // itemColor.setAttribute('class','item_color');
        let delBtn = document.createElement('img');
        delBtn.setAttribute('src','img/sub_subscription/delete_btn.png');
        delBtn.setAttribute('class','delete_btn');
        delBtn.addEventListener('click',()=> {
            itemRow.removeChild(itemLi)
            // document.querySelector('.colorp').innerHTML = '잼을 선택하세요';
        })
        let itemName = document.createElement('p');
        let name = e.target.innerHTML;
        itemName.innerHTML = name;
        // document.querySelector('.colorp').innerHTML = name;
        itemLi.appendChild(itemName);
        itemLi.appendChild(delBtn);
        // itemLi.appendChild(itemColor);
        
        itemRow.appendChild(itemLi);
        return itemRow; 
    
  
}
});