let hourNeedle = document.querySelector(".hour");
let minNeedle = document.querySelector(".min");
let secNeedle = document.querySelector(".sec");
let timeSec = document.querySelector(".time");
let daySec = document.querySelector(".day");
let dateSec = document.querySelector(".date");
let darkMode = document.querySelector(".darkMode");
const weekdaysArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ClockWork() {
  let date = new Date();
  let hours = date.getHours();
  let hours_position = hours % 12;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let month = date.getMonth();
  let weekday = date.getDay();
  let day = date.getDate();
  hourNeedle.style.transform = `translate(-100%,-100%) rotate(${convertValueToBoundary(
    hours_position,
    0,
    11,
    0,
    360
  )}deg)`;
  minNeedle.style.transform = `translate(-100%,-100%) rotate(${convertValueToBoundary(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;
  secNeedle.style.transform = `translate(-100%,-100%) rotate(${convertValueToBoundary(
    second,
    0,
    59,
    0,
    360
  )}deg)`;
  let minute2 = minute < 10 ? "0" + minute : minute;
  let hour2 = hours_position < 10 ? "0" + hours_position : hours_position;
  let PmAm = hours > 12 ? "PM" : "AM";
  timeSec.innerHTML = hour2 + ":" + minute2 + " " + PmAm;
  daySec.innerHTML = `${weekdaysArr[weekday - 1]},${
    monthsArr[month]
  }<div class="date">${day}</div>`;
}

function convertValueToBoundary(number, oldMin, oldMax, newMin, newMax) {
  return ((number - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}
const theme = localStorage.getItem("theme");
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
darkMode.addEventListener("click", (e) => {
  if (localStorage.theme === "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  // Whenever the user explicitly chooses to respect the OS preference
  //   localStorage.removeItem("theme");
});

setInterval(ClockWork, 1000);
