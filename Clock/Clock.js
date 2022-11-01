let day = new Date();
const title = document.querySelector("div > h1.title");
let h = String(day.getHours()).padStart(2, "0");
let m = String(day.getMinutes()).padStart(2, "0");
let s = String(day.getSeconds()).padStart(2, "0");
title.textContent = `${h}:${m}:${s}`;
setInterval(() => {
  day = new Date();
  let h = String(day.getHours()).padStart(2, "0");
  let m = String(day.getMinutes()).padStart(2, "0");
  let s = String(day.getSeconds()).padStart(2, "0");
  title.textContent = `${h}:${m}:${s}`;
}, 1000);
