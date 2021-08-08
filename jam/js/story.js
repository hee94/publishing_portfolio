$(function(){

    var roll1=1;
    setInterval(function(){
        roll1++;
        if(roll1>3){roll1=1;}
        $('.ls').attr('src','img/story/s3_s'+roll1+'.png');
    }, 1200);

    var roll2=2;
    setInterval(function(){
        roll2++;
        if(roll2>3){roll2=1;}
        $('.cb').attr('src','img/story/s3_b'+roll2+'.png');
    }, 1200);

    var roll3=3;
    setInterval(function(){
        roll3++;
        if(roll3>3){roll3=1;}
        $('.rs').attr('src','img/story/s3_s'+roll3+'.png');
    }, 1200);
})