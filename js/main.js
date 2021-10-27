const days = 8;
const hours = 23;
const minutes = 55;
const seconds = 41;

var timer = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;

setInterval(counter, 1000);

function counter() {
    var days_left = Math.floor(timer / 86400);
    if (days_left < 10) {
        days_left = "0" + days_left;
    }
    var hours_left = Math.floor((timer % 86400) / 3600);
    if (hours_left < 10) {
        hours_left = "0" + hours_left;
    }
    var minutes_left = Math.floor((timer % 3600) / 60);
    if (minutes_left < 10) {
        minutes_left = "0" + minutes_left;
    }
    var seconds_left = timer % 60;
    if (seconds_left < 10) {
        seconds_left = "0" + seconds_left;
    }

    $("#days-1").html(days_left);
    $("#days-2").html(days_left);

    $("#hours-1").html(hours_left);
    $("#hours-2").html(hours_left);

    $("#minutes-1").html(minutes_left);
    $("#minutes-2").html(minutes_left);

    $("#seconds-1").html(seconds_left);
    $("#seconds-2").html(seconds_left);



    timer--;
    // console.log(timer);
}