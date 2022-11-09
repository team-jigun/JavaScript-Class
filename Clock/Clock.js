const clock = document.querySelector(".title");
console.log(clock);
function GoClock() {
  const date = new Date();

  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(GoClock, 1000);
