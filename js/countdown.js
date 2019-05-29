window.onload=main
function timeshow(){
    var now = new Date();

    //parameters
    var year = now.getFullYear();
    var month = now.getMonth() + 1;//month of JavaScript is 0 to 11;
    var day = now.getDay();
    var hour = 19;
    var minute = 30;
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

    setTimeout("timeshow()",10);


}

function main(){
    timeshow();
    

    console.log(document.getElementById("announce").getElementsByClassName("text")[0]);
}
$(document).ready(function() {
  $('#announce').marquee();

});
