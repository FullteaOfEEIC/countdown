window.onload=main

var speed=0.1;

function timeshow(data){
    var now = new Date();

    //parameters
    var year = now.getFullYear();
    var month = now.getMonth() + 1;//month of JavaScript is 0 to 11;
    var day = now.getDay();
    var hour=data.hour;
    var minute=data.minute;


    var second = 0;


    var limit = new Date(year,month-1,day,hour,minute,second);
    if(limit<0){
        return 1;
    }


    var left = limit - now;
    cnt_day = Math.floor(left/(1000*60*60*24));
    left = left -(cnt_day*(1000*60*60*24));
    cnt_hour = Math.floor(left/(1000*60*60));
    left = left -(cnt_hour*(1000*60*60));
    cnt_min = Math.floor(left/(1000*60));
    left = left -(cnt_min*(1000*60));
    cnt_sec = Math.floor(left/1000);
    left = left -(cnt_sec*(1000));
    cnt_millisec = Math.floor(left/10);




    document.getElementById("minute10").getElementsByTagName("p")[0].innerHTML=Math.floor(cnt_min/10);
    document.getElementById("minute1").getElementsByTagName("p")[0].innerHTML=cnt_min%10;
    document.getElementById("second10").getElementsByTagName("p")[0].innerHTML=Math.floor(cnt_sec/10);
    document.getElementById("second1").getElementsByTagName("p")[0].innerHTML=cnt_sec%10;

    setTimeout(`$.getJSON("https://frt.hongo.wide.ad.jp/data.json", timeshow)`,100);


}

function scroll(timestamp){
    const screenWidth=window.parent.screen.width;
    const target=document.getElementById("announce");
    var objectWidth=target.scrollWidth;
    var X = (-0.1*timestamp)%(screenWidth+objectWidth)+screenWidth;
    target.style.transform = `translate(${X}px)`;
    requestAnimationFrame(scroll)

}

function message(data){
    console.log(data.text);
    $("#announce").text("");
    for(var i in data.text){
        $("#announce").append('<div class="text"><p>'+data.text[i]+'</p></div>')
    }
    setTimeout(`$.getJSON("https://frt.hongo.wide.ad.jp/data.json", message)`,10000);

}

function main(){
    $.getJSON("https://frt.hongo.wide.ad.jp/data.json", timeshow);
    $.getJSON("https://frt.hongo.wide.ad.jp/data.json", message);
    requestAnimationFrame(scroll);
};
