let clock = document.querySelector(".title");

setInterval(() => {
  let time = new Date();
  let hour = setTime(time.getHours());
  let minutes = setTime(time.getMinutes());
  let seconds = setTime(time.getSeconds());

  if (hour < 10) {
    "0" + hour;
  } else {
    hour;
  }

  if (minutes < 10) {
    "0" + minutes;
  } else {
    minutes;
  }

  if (seconds < 10) {
    "0" + seconds;
  } else {
    seconds;
  }

  clock.innerHTML = `${hour}:${minutes}:${seconds}`;
}, 1000);
