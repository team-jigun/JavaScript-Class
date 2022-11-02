let clock = document.querySelector(".title");

function time() {
  let date = new Date();

  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
setInterval(time, 1000);
