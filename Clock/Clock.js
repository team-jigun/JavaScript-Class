let clock = document.querySelector(".title");

function time() {
  let date = new Date();
  let hour = check(date.getHours());
  let minute = check(date.getMinutes());
  let second = check(date.getSeconds());
  clock.innerText = `${hour}:${minute}:${second}`;
}
function check(clock) {
  if (parseInt(clock) < 10) {
    return "0" + clock;
  } else {
    return clock;
  }
}
setInterval(time, 1000);
