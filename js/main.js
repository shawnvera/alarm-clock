// initial variables

let timeRef = document.getElementById('time-display');
let hourInput = document.getElementById('hour').value;
let minuteInput = document.getElementById('minute');
let activeAlarms = document.getElementById('active-alarms');
let setAlarm = document.getElementById('set-alarm');
let alarmsArray = [];

function alarmTimer () {
    let userAlarm = document.getElementById('alarm').value;
    document.getElementById('test').innerHTML = userAlarm;
    alarmsArray.push(userAlarm);
}

console.log(alarmsArray);

let initialHour = 0, initialMinute = 0, alarmIndex = 0;

// functions for clock

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


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