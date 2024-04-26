const closeTagLineBtn = document.querySelector('.tagline__close');

const tagline = document.querySelector('.tagline');


closeTagLineBtn.onclick = function() {
  tagline.remove();
}

// const endDate = new Date();
// endDate.setDate(endDate.getDate() + 3);

const endDate = new Date('Apr 29, 2024, 23:59:59');

const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

function updateTimer() {
  const now = new Date();

  const timeDifference = endDate - now;
  // console.log('timeDefference', timeDifference);
  
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);