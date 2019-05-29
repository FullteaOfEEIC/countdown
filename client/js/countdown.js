window.onload=main

var speed=0.1;

function timeshow(hour,minute){
    var now = new Date();

    //parameters
    var year = now.getFullYear();
    var month = now.getMonth() + 1;//month of JavaScript is 0 to 11;
    var day = now.getDay();
    $.getJSON("https://frt.hongo.wide.ad.jp/data.json", function (data) {
    var hour=data.hour;
    var minute=data.minute;
    });


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

    setTimeout(`timeshow(${hour},${minute})`,10);


}

function scroll(timestamp){
    const screenWidth=window.parent.screen.width;
    const target=document.getElementById("announce");
    var objectWidth=target.scrollWidth;
    var X = (-0.1*timestamp)%(screenWidth+objectWidth)+screenWidth;
    target.style.transform = `translate(${X}px)`;
    requestAnimationFrame(scroll)

}

function main(){
    timeshow(19,0);
    requestAnimationFrame(scroll);
};
