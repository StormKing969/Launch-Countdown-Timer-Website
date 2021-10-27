const days = 08;
const hours = 23;
const minutes = 55;
const seconds = 41;

var timer = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;

setInterval(counter, 1000);

function counter() {
    var days_left = Math.floor(timer / 86400);
    var hours_left = Math.floor((timer % 86400) / 3600);
    var minutes_left = Math.floor((timer % 3600) / 60);
    var seconds_left = timer % 60;

    $("#days").html(days_left);
    $("#hours").html(hours_left);
    $("#minutes").html(minutes_left);
    $("#seconds").html(seconds_left);

    timer--;
    
}

$(".days").click(function() {
    $(".top-half").rotate(180);
});