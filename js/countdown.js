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
        $("#announce").css({
            "width": 0,
            "height": 0,
            "opacity": 0
        });
        $("#counter").text("");
        $("#mes").text("");
        setTimeout(`rightHand(30)`, 1000);
        return 0;
    }
    setTimeout(`fade(` + (opacity + 0.01) + `)`, 10);
}

function rightHand(position) {
    if (position < 0) {
        leftHand(60);
        return 0;
    }
    document.getElementsByClassName("right")[0].style.top = position + "%";
    setTimeout(`rightHand(` + (position - 0.2) + `)`, 10);

}

function leftHand(position) {
    if (position < 0) {
        face1(70);
        return 0;
    }
    document.getElementsByClassName("left")[0].style.top = position + "%";
    setTimeout(`leftHand(` + (position - 0.6) + `)`, 10);

}

function face1(position) {
    if (position < 20) {
        setTimeout(`face2(` + (position + 0.8) + `)`, 800);
        return 0;
    }
    document.getElementsByClassName("face")[0].style.top = position + "%";
    setTimeout(`face1(` + (position - 0.8) + `)`, 10);

}

function face2(position) {
    if (position > 25) {
        setTimeout(`face3(` + (position - 0.1) + `)`, 300);
        return 0;
    }
    document.getElementsByClassName("face")[0].style.top = position + "%";
    setTimeout(`face2(` + (position + 0.1) + `)`, 10);

}

function face3(position) {
    if (position < 0) {
        setTimeout(`cloud2(0)`, 800);
        return 0;
    }
    document.getElementsByClassName("face")[0].style.top = position + "%";
    setTimeout(`face3(` + (position - 0.4) + `)`, 10);

}

function cloud2(opacity) {
    if (opacity > 1) {
        document.getElementsByClassName("cloud2")[0].style.opacity = 1;
        setTimeout(`cloud3(0)`, 400);
        return 0;
    }
    document.getElementsByClassName("cloud2")[0].style.opacity = opacity;
    setTimeout(`cloud2(` + (opacity + 0.03) + `)`, 10);

}

function cloud3(opacity) {
    if (opacity > 1) {
        document.getElementsByClassName("cloud3")[0].style.opacity = 1;
        setTimeout(`cloud4(0)`, 400);
        return 0;
    }
    document.getElementsByClassName("cloud3")[0].style.opacity = opacity;
    setTimeout(`cloud3(` + (opacity + 0.03) + `)`, 10);

}

function cloud4(opacity) {
    if (opacity > 1) {
        document.getElementsByClassName("cloud4")[0].style.opacity = 1;
        setTimeout(`title(0)`,40);
        return 0;
    }
    document.getElementsByClassName("cloud4")[0].style.opacity = opacity;
    setTimeout(`cloud4(` + (opacity + 0.02) + `)`, 10);

}

function title(opacity) {
    if (opacity > 1) {
        document.getElementsByClassName("title")[0].style.opacity = 1;
        return 0;
    }
    document.getElementsByClassName("title")[0].style.opacity = opacity;
    setTimeout(`title(` + (opacity + 0.04) + `)`, 10);

}
