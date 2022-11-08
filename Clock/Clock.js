let hour = 0;
let min = 0;
let sec = 0;

let clock = document.querySelector(".title");

let time = setInterval(() => {
  sec += 1;
  if (sec >= 60) {
    sec = 0;
    min += 1;

    if (min >= 60) {
      min = 0;
      hour += 1;

      if (hour >= 24) {
        hour = 0;
      }
    }
  }

  clock.textContent =
    ("00" + hour).slice(-2) +
    ":" +
    ("00" + min).slice(-2) +
    ":" +
    ("00" + sec).slice(-2);
}, 1000);
