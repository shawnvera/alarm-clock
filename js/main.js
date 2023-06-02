// function to convert time to string value and adding 0 if under 10.

const getTimeString = ({ hours, minutes, seconds, zone }) => {
    if (minutes / 10 < 1) {
        minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
        seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}:${zone}`;
};

// function to display current time on the screen.
const renderTime = () => {
    var currentTime = document.getElementById("clock");
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours = hours % 12;
    }
    const timeString = getTimeString({ hours, minutes, seconds, zone});
    currentTime.innerHTML = timeString;
}

// Update time every second\

setInterval(renderTime, 1000);















// initial variables
/*
let timeRef = document.getElementById('time-display');
let hourInput = document.getElementById('hour').value;
let minuteInput = document.getElementById('minute');
let activeAlarms = document.getElementById('active-alarms');
let setAlarm = document.getElementById('set-alarm');


const alarmsArray = [];
let userAlarm;
function alarmTimer () {
    userAlarm = document.getElementById('alarm').value;
    document.getElementById('clock').innerHTML = userAlarm;
    alarmsArray.push(userAlarm.value);
    
}
for (let i = 0; i < alarmsArray.length; i++){
console.log(alarmsArray[i]);
}

console.log(userAlarm);

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