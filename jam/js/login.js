$(document).ready(function(){
    $("#id").focus();

    $('.login_btn').click(function(e){
        e.preventDefault();
        loginCheck()
        return false;
        // let logId = document.querySelector('#login').value
        // let logPw = document.querySelector('#pw').value
        
        // if( logId == 'admin' && logPw == '123456'){
        //     location.replace('sub_mypage.html');
        //     alert(`${logId}님 환영합니다.`);
        // }else{
        //     alert('ID와 비밀번호를 확인하세요');
        //     logId = '';
        //     logPw = '';
        // }
    })

    $('.forget').click(function(e){
        e.preventDefault();
        $('.forget_alert').fadeIn(800);
        $('.container').animate({'opacity':'0.5'}, 800);
        $('.close2').click(function(){
            $('.forget_alert').fadeOut(800);
            $('.container').animate({'opacity':'1'}, 800, function(){
                $("#id").focus();
            });
        })
    })

})

let logBtn = document.querySelector('.login_btn');

function loginCheck(){

    let isId = 'admin';
    let isPw = '123456';
    let id = document.querySelector('#id').value;
    let idCheck = document.querySelector('#idMsg');
    let pw = document.querySelector('#pw').value;
    let pwCheck = document.querySelector('#pwMsg');

    if(isId != id){
        idCheck.innerHTML = "아이디를 다시 확인해주세요!";
        $("#id").focus();
        pwCheck.innerHTML = "";
        id = '';
        return false;
    }else if(isPw != pw){
        pwCheck.innerHTML = "비밀번호를 다시 확인해주세요!";
        $("#pw").focus();
        idCheck.innerHTML = "";
        pw = '';
        return false;
    }else{
        $('.alert').fadeIn(800);
        $('.container').animate({'opacity':'0.5'}, 800);
        $('.close').click(function(){
            location.replace('sub_mypage.html');
        })
    }
}