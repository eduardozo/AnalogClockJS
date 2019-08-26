const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function reach360Deg(hr, min, sec) {
    let none = "none";
    let transform = "transform .5s ease-in-out";

    if (hr === 12 || hr === 0) {
        HOURHAND.style.transition = none;
    }
    if (hr === 1 || hr === 13) {
        HOURHAND.style.transition = transform;
    }
    if (min === 0) {
        MINUTEHAND.style.transition = none;
    }
    if (min === 1) {
        MINUTEHAND.style.transition = transform;
    }
    if (sec === 0) {
        SECONDHAND.style.transition = none;
    }
    if (sec === 1) {
        SECONDHAND.style.transition = transform;
    }
}

function runTheClock() {
    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Seconds: " + sec);

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);

    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = sec * 360 / 60;

    reach360Deg(hr, min, sec);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(runTheClock, 1000);