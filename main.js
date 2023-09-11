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
function updateTime() {
  const currentDate = new Date();
  const millisecond = currentDate.getTime();
  document.querySelector(".time").innerHTML = ` UTC Time (ms): ${millisecond} `;
}

daytime.innerHTML = `Day of the Week: ${dayName}`;
updateTime();
setInterval(updateTime, 1000);
