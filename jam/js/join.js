$(document).ready(function() {

    $("#id").focus();

    $('.right').click(function(e){
        e.preventDefault();
        $('.terms').fadeIn(700);
    })
    $('.terms_confirm').click(function(e){
        e.preventDefault();
        $('.terms').fadeOut(400);
    })
    $('.confirm').click(function(e){
        e.preventDefault();
        $('.confirm_alert').fadeIn(800);
        $('.container').animate({'opacity':'0.5'}, 800, function(){
            $("#id").focus();
        });
    })
    $('.close1').click(function(){
        $('.confirm_alert').fadeOut(800);
        $('.container').animate({'opacity':'1'}, 800);
    })

    $("#a1").prop("checked",false);
    setTerms();

    $("#a1").click(function() {
        $("#join_btn").focus();
        setTerms();
    })

    $("#a2").click(function() {
        viewTerms();
    })

    $("#a3").click(function() {
        viewTerms();
    })

    $("#a4").click(function() {
        viewTerms();
    })

    $("#a5").click(function() {
        viewTerms();
    })

    $("#a6").click(function() {
        viewTerms();
    })

    
    $("#join_btn").click(function(e) {
        e.preventDefault();
        submitCheck();
        // checkTerms();
        // submitAgree();
        return false;

        
    })

});

let submit = document.querySelector('#join_btn');

    function submitCheck(){
    
        let isID = /^[a-z0-9][a-z0-9_\-]{4,19}$/;
        let isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isName = /^[가-힣]{2,5}$/
        let isPw = /^[A-Za-z0-9+]{6,16}$/;
        let id = document.querySelector('#id').value;
        let idCheck = document.querySelector('#idMsg');
        let pw1 = document.querySelector('#pw1').value;
        let pw2 = document.querySelector('#pw2').value;
        let pw1Check = document.querySelector('#pw1Msg');
        let pw2Check = document.querySelector('#pw2Msg');
        let mail = document.querySelector('#email').value;
        let mailCheck = document.querySelector('#emailMsg');
        let name = document.querySelector('#name').value;
        let nameCheck = document.querySelector('#nameMsg');


        if(!(isID.test(id))){
            idCheck.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
            $("#id").focus();
            nameCheck.innerHTML = "";
            mailCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            id = '';
            return false;
        }else if(!(isName.test(name))){
            nameCheck.innerHTML = "2~5자의 한글만 사용 가능합니다.";
            $("#name").focus();
            idCheck.innerHTML = "";
            mailCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            name = '';
            return false;
        }else if(!(isEmail.test(mail))){
            mailCheck.innerHTML = "이메일 주소를 확인하세요.";
            $("#mail").focus();
            idCheck.innerHTML = "";
            nameCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2Check.innerHTML = "";
            mail = '';
            return false;
        }else if(!(isPw.test(pw1))){
            pw1Check.innerHTML="비밀번호는 숫자+영어의 조합 6~16자리여야 합니다."
            $("#pw1").focus();
            idCheck.innerHTML = "";
            nameCheck.innerHTML = "";
            mailCheck.innerHTML = "";
            pw2Check.innerHTML = "";
            pw1 = '';
            return false;
        }else if(pw1!=pw2){
            pw2Check.innerHTML = "비밀번호가 일치하지 않습니다.";
            $("#pw2").focus();
            idCheck.innerHTML = "";
            nameCheck.innerHTML = "";
            mailCheck.innerHTML = "";
            pw1Check.innerHTML = "";
            pw2 = '';
            return false;
        }else if(checkTerms() != true){
            $('.terms_alert').fadeIn(800);
            $('.container').animate({'opacity':'0.5'}, 800);
            $('.close2').click(function(){
                $('.terms_alert').fadeOut(800);
                $('.container').animate({'opacity':'1'}, 800, function(){
                    $('#a1').focus();
                });
            })
            return false;
        }else{
            $('.join_alert').fadeIn(800);
            $('.container').animate({'opacity':'0.5'}, 800);
            $('.close3').click(function(){
                location.replace('login.html');
            })
        };
    }

function setTerms() {
    if ($("#a1").is(":checked")) {
        $("#a2").prop("checked",true);
        $("#a3").prop("checked",true);
        $("#a4").prop("checked",true);
        $("#a5").prop("checked",true);
        $("#a6").prop("checked",true);
    } else {
        $("#a2").prop("checked",false);
        $("#a3").prop("checked",false);
        $("#a4").prop("checked",false);
        $("#a5").prop("checked",false);
        $("#a6").prop("checked",false);
    }

    return true;
}

function viewTerms() {

    if( !$("#a2").is(":checked") || !$("#a3").is(":checked") || !$("#a4").is(":checked") || !$("#a5").is(":checked") || !$("#a6").is(":checked")) {
        $("#a1").prop("checked",false);
    }

    if( $("#a2").is(":checked") && $("#a3").is(":checked") && $("#a4").is(":checked") && $("#a5").is(":checked") && $("#a6").is(":checked")) {
        $("#a1").prop("checked",true);
    }

    return true;
}

function checkTerms() {
    var res = true;

    if ($("#a2").is(":checked") == false || $("#a3").is(":checked") == false || $("#a6").is(":checked") == false) {
        res = false;
    } 
    return res;
}

function submitAgree() {
    if (submitCheck() != true) {
        return false;
    }else if (checkTerms() != true) {
        return false;
    }
}

//     $("#join_form").submit();
//     return true;
// }

// function submitDisagree() {
//     location.href = "";
//     return true;
// }

// $("#id").blur(function() {
//     idFlag = false;
//     checkId("first");
// });

// $("#pw1").blur(function() {
//     pwFlag = false;
//     checkPw1();
// })

// $("#pw2").blur(function() {
//     checkPw2();
// })

// $("#name").blur(function() {
//     checkName();
// });

// $("#email").blur(function() {
//     checkEmail();
// });