let time = document.querySelector('.time');
let daytime = document.querySelector('.day');
let profile =document.querySelector('section');
window.onload= function (){
    profile.classList.remove('off')
    profile.classList.add('profile')
}





const currentDate = new Date();

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayName = day[currentDate.getUTCDay()];

const currentUTCTimeMillis = Date.now();

const utcTimeString = 
`Current Day of the Week: ${dayName}` ;



time.innerHTML = utcTimeString
daytime.innerHTML =`Current UTC Time in Milliseconds: ${currentUTCTimeMillis}`;