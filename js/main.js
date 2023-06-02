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
  const timeString = getTimeString({ hours, minutes, seconds, zone });
  currentTime.innerHTML = timeString;
};

// Update time every second
setInterval(renderTime, 1000);

const alarmsArray = [];
let userAlarm;
function alarmTimer(e) {
  userAlarm = document.getElementById('alarm').value;
  document.getElementById('clock').innerHTML = userAlarm;
  alarmsArray.push(userAlarm);

  for (let i = 0; i < alarmsArray.length; i++) {
    console.log(alarmsArray[i]);
    let alarms = document.getElementById("active-alarms");
    alarms.innerHTML = alarmsArray;
}
}













