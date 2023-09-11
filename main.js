let daytime = document.querySelector(".day");
let profile = document.querySelector("section");
window.onload = function () {
  profile.classList.remove("off");
  profile.classList.add("profile");
};

const currentDate = new Date();
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayName = day[currentDate.getUTCDay()];

const utcTimeString = ` ${dayName}`;

function updateTime() {
  const currentDate = new Date();
  const timezone = { timezone: "Africa/Lagos" };
  const local = currentDate.toLocaleTimeString("en-us", timezone);
  const millisecond = currentDate.getTime();
  document.querySelector(
    ".time"
  ).innerHTML = `Local Time: ${local} | UTC Time in (ms): ${millisecond} `;
}

daytime.innerHTML = `Day of the Week: ${dayName}`;
updateTime();
setInterval(updateTime, 1000);
