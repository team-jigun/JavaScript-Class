const clock = document.querySelector(".clock");

function getClock() {
  const clock2 = new Date();
  clock.innerText = `${clock2.getHours()}: ${clock2.getMinutes()}:${
    00 + clock2.getSeconds()
  }`;
}

getClock();
setInterval(getClock, 1000);
