function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds)
document.getElementById('time').innerHTML = hour + ':' + minutes + ":" + seconds;
setTimeout(startTime, 1000);


}

function checkTime() {
    if (i < 10) { i = "0" + i };
    return i;
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