import '../styles/main.css';

function hours12(date) {
  return (date.getHours() + 24) % 12 || 12;
}

function displayHours(hours) {
  const hourEls = document.querySelectorAll('.hour');
  hourEls.forEach((hourEle) => {
    hourEle.classList.remove('active');
  });

  const currentHours = document.querySelectorAll(`.hour.hour-${hours}`);
  currentHours.forEach((hourEle) => {
    hourEle.classList.add('active');
  });
}

function displayMinutes(minutes) {
  const minunteEls = document.querySelectorAll('.minute');
  minunteEls.forEach((minuteEle) => {
    minuteEle.classList.remove('active');
  });

  let selector = '';

  if (minutes < 5) {
    selector = '.minute-0';
  } else if (minutes >= 5 && minutes < 10) {
    selector = '.minute-5, .minute-past';
  } else if (minutes >= 10 && minutes < 15) {
    selector = '.minute-10, .minute-past';
  } else if (minutes >= 15 && minutes < 20) {
    selector = '.minute-15, .minute-past';
  } else if (minutes >= 20 && minutes < 25) {
    selector = '.minute-20, .minute-past';
  } else if (minutes >= 25 && minutes < 30) {
    selector = '.minute-20, .minute-5, .minute-past';
  } else if (minutes >= 30 && minutes < 35) {
    selector = '.minute-30, .minute-past';
  } else if (minutes >= 35 && minutes < 40) {
    selector = '.minute-20, .minute-5, .minute-to ';
  } else if (minutes >= 40 && minutes < 45) {
    selector = '.minute-20, .minute-to';
  } else if (minutes >= 45 && minutes < 50) {
    selector = '.minute-15, .minute-to';
  } else if (minutes >= 50 && minutes < 55) {
    selector = '.minute-10, .minute-to';
  } else if (minutes >= 55 && minutes <= 59) {
    selector = '.minute-5, .minute-to';
  }

  const currentMinutes = document.querySelectorAll(selector);
  currentMinutes.forEach((minuteEle) => {
    minuteEle.classList.add('active');
  });
}

function displayDots(minutes) {
  const bulletEls = document.querySelectorAll('.bullet');
  bulletEls.forEach((bulletEle) => {
    bulletEle.classList.remove('active');
  });

  let selector = '';
  const bullets = minutes % 5;
  if (bullets === 1) {
    selector = '.bullet-1';
  } else if (bullets === 2) {
    selector = '.bullet-1, .bullet-2';
  } else if (bullets === 3) {
    selector = '.bullet-1, .bullet-2, .bullet-3';
  } else if (bullets === 4) {
    selector = '.bullet-1, .bullet-2, .bullet-3, .bullet-4';
  }

  const currentBullets = document.querySelectorAll(selector);
  currentBullets.forEach((bulletEle) => {
    bulletEle.classList.add('active');
  });
}

function displayTime() {
  const date = new Date();
  const hours = hours12(date);
  const minutes = date.getMinutes();
  displayHours(minutes > 30 ? hours + 1 : hours);
  displayMinutes(minutes);
  displayDots(minutes);
}

displayTime();
setInterval(displayTime, 10_000); // 10 secs
