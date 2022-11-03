const title = document.querySelector("div > h1.title");
function resetTimeAndChangeTime() {
  let day = new Date();
  let h = String(day.getHours()).padStart(2, "0");
  let m = String(day.getMinutes()).padStart(2, "0");
  let s = String(day.getSeconds()).padStart(2, "0");

  title.textContent = `${h}:${m}:${s}`;
}
resetTimeAndChangeTime();
setInterval(() => {
  resetTimeAndChangeTime();
}, 1000);
