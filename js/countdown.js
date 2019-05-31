window.onload = main

var speed = 0.1;

function timeshow(data) {
    var now = new Date();

    //parameters
    var year = now.getFullYear();
    var month = now.getMonth() + 1; //month of JavaScript is 0 to 11;
    var day = now.getDate();
    var hour = data.hour;
    var minute = data.minute;


    var second = 0;

    var limit = new Date(year, month - 1, day, hour, minute, second);
    var left = limit - now;
    if (left < 0) {
        startAnimation();
        return 1;
    }


    cnt_day = Math.floor(left / (1000 * 60 * 60 * 24));
    left = left - (cnt_day * (1000 * 60 * 60 * 24));
    cnt_hour = Math.floor(left / (1000 * 60 * 60));
    left = left - (cnt_hour * (1000 * 60 * 60));
    cnt_min = Math.floor(left / (1000 * 60));
    left = left - (cnt_min * (1000 * 60));
    cnt_sec = Math.floor(left / 1000);
    left = left - (cnt_sec * (1000));
    cnt_millisec = Math.floor(left / 10);



    document.getElementById("hour").getElementsByTagName("p")[0].innerHTML = Math.floor(cnt_hour % 10);
    document.getElementById("minute10").getElementsByTagName("p")[0].innerHTML = Math.floor(cnt_min / 10);
    document.getElementById("minute1").getElementsByTagName("p")[0].innerHTML = cnt_min % 10;
    document.getElementById("second10").getElementsByTagName("p")[0].innerHTML = Math.floor(cnt_sec / 10);
    document.getElementById("second1").getElementsByTagName("p")[0].innerHTML = cnt_sec % 10;

    setTimeout(`$.getJSON("./data.json", timeshow)`, 100);


}

function scroll(timestamp) {
    const screenWidth = window.parent.screen.width;
    const target = document.getElementById("announce");
    var objectWidth = target.scrollWidth;
    var X = (-0.1 * timestamp) % (screenWidth + objectWidth) + screenWidth;
    target.style.transform = `translate(${X}px)`;
    requestAnimationFrame(scroll)

}

function message(data) {

    $("#announce").text("");
    for (var i in data.text[0]) {
        $("#announce").append('<div class="text"><p>' + data.text[0][i] + '</p></div>')
    }
    setTimeout(`$.getJSON("./data.json", message)`, 10000);

}

function main() {
    $.getJSON("./data.json", timeshow);
    $.getJSON("./data.json", message);
    requestAnimationFrame(scroll);
};


function startAnimation() {
    console.log("Animation Start");
    fade(0);
}

function fade(opacity) {
    document.getElementById("animation").style.opacity = opacity;
    if (opacity > 1) {
        $("#announce").css({"width":0,"height":0,"opacity":0});
        $("#counter").text("");
        $("#mes").text("");
        return 0;
    }
    setTimeout(`fade(` + (opacity + 0.01) + `)`, 10)
}
