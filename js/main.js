function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();
    mins = checkTime (mins);
    secs = checkTime(secs)
    document.getElementById('clock').innerHTML = hour + ":" + mins + ":" + secs;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

/*
let btn = document.getElementById("btn");
let alarmTime = document.getElementById('alarm-time');

btn.addEventListener('click', () => {

    console.log(alarmTime);
})

function getAlarmTime() {
    document.getElementById('alarm-time');
    console.log(alarmTime);
}


let time = new Date();
document.createElement('div')
div.appendChild(time);
*/