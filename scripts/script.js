const timer = document.getElementById("time");
const todate = document.getElementById("date");
const button = document.getElementById("button");
const studyTime = document.getElementById("study-time");
const breakTime = document.getElementById("break-time");
const session = document.getElementById("sessions");
const context = document.getElementById("context");
const sTimer = document.getElementById("timer");

// watch START
let watchInterval = setInterval(function () {
  let today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDay();
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();

  timer.innerHTML = pad(hour) + ":" + pad(minute) + ":" + pad(seconds);
  todate.innerHTML = getDay(day) + ", " + getMonth(month) + " " + pad(date);
});
// watch END

let min = 0;
let sec = 0;
let sess = session.value;
let swtch = 0;

let timerInterval;
button.addEventListener("click", function () {
  if (button.value === "Start") {
    button.value = "Stop";
    timerInterval = setInterval(funInterval, 1000);
  } else if (button.value === "Stop") {
    button.value = "Start";
    clearInterval(timerInterval);
  }
});

function funInterval() {
  if (sec < 59 && min < studyTime.value && min < breakTime.value) {
    ++sec;
  } else if (min < 59 && min < studyTime.value && min < breakTime.value) {
    sec = 0;
    ++min;
  } else {
    if (context.innerHTML === "Study Timer") {
      context.innerHTML = "Break Timer";
      swtch = 1;
    } else if (context.innerHTML === "Break Timer") {
      context.innerHTML = "Study Timer";
      swtch = 0;
    }
    min = 0;
    sec = 0;
    --sess;
    if (sess > 1) {
      clearInterval(timerInterval);
    }
  }
  sTimer.innerHTML = newTime(pad(min), pad(sec));
  console.log(newTime(min, sec));
}

// countdown START
// let interval;
// let sTime = studyTime.value * 60;
// let bTime = breakTime.value * 60;
// let sess = session.value;

// button.addEventListener("click", function (event) {
//   if (event.target.value === "Start") {
//     event.target.value = "Stop";
//     interval = setInterval(funInterval, 1000);
//   } else {
//     clearInterval(interval);
//     event.target.value = "Start";
//   }
// });

// function funInterval() {
//   newTime = pad(bTime) + ":" + pad(sTime);
//   if (sNew < sTime && sess > 0) {
//     console.log("study: " + sTime);
//     context.innerHTML = "Study Timer";
//     sTimer.innerHTML = pad(sTime);
//     --sTime;
//   } else if (bNew < bTime && sess > 1) {
//     console.log("break: " + bTime);
//     context.innerHTML = "Break Timer";
//     sTimer.innerHTML = pad(bTime);
//     --bTime;
//   } else if (sess > 1) {
//     sTime = studyTime.value * 60;
//     bTime = breakTime.value * 60;
//     context.innerHTML += " " + sess;
//     console.log("session: " + sess);
//     --sess;
//   } else {
//     sTimer.innerHTML = newTime(0, 0);
//   }
// }
// countdown END

function newTime(minute, second) {
  return minute + ":" + second;
}

function pad(digit) {
  return digit < 10 ? "0" + digit : digit;
}

function getDay(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
  }
}

function getMonth(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "Febuarary";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "No Month";
  }
}
