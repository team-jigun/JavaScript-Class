let arr = ["./image/1.png", "./image/2.png", "./image/3.png"];
const bot = document.querySelector(".computerRSP");
let i = 0;

let q = setInterval(rsp, 300);

function rsp() {
  bot.setAttribute("src", `${arr[i]}`);
  if (i < 2) {
    i++;
  } else {
    i = 0;
  }
}

let user = document.querySelector(".user");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let result = document.querySelector(".body");

user.addEventListener("dragstart", (e) => {
  console.log(e);

  bot.addEventListener("dragover", () => {
    if (e.target == rock) {
      if (i === 0) {
        clearInterval(q);
        result.textContent = "패배했어요ㅠㅠ";
      } else if (i === 1) {
        clearInterval(q);
        result.textContent = "비겼어요ㅎㅎ";
      } else if (i === 2) {
        clearInterval(q);
        result.textContent = "승리했어요!!";
      }
    } else if (e.target == scissors) {
      if (i === 0) {
        clearInterval(q);
        result.textContent = "승리했어요!!";
      } else if (i === 1) {
        clearInterval(q);
        result.textContent = "패배했어요ㅠㅠ";
      } else if (i === 2) {
        clearInterval(q);
        result.textContent = "비겼어요ㅎㅎ";
      }
    } else if (e.target == paper) {
      if (i === 0) {
        clearInterval(q);
        result.textContent = "비겼어요ㅎㅎ";
      } else if (i === 1) {
        clearInterval(q);
        result.textContent = "승리했어요!!";
      } else if (i === 2) {
        clearInterval(q);
        result.textContent = "패배했어요ㅠㅠ";
      }
    }
  });

  setTimeout(() => {
    q = setInterval(rsp, 300);
    result.textContent = "결과";
  }, 2500);
});
