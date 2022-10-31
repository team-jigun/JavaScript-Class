let dropzone = document.querySelector(".dropzone");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let result = document.querySelector(".body");
let i = 0;
let j = 0;

rock.addEventListener("dragstart", () => {
  j = 1;
});

scissors.addEventListener("dragstart", () => {
  j = 2;
});

paper.addEventListener("dragstart", () => {
  j = 3;
});

dropzone.addEventListener("dragenter", () => {
  clearInterval(render);
  console.log(j);
  if ((i % 3) + 1 == j) {
    result.innerHTML = "결과: 비겼습니다.";
  } else if (((i % 3) + 1 == 2) & (j == 1)) {
    result.innerHTML = "결과: 승리!";
  } else if (((i % 3) + 1 == 3) & (j == 2)) {
    result.innerHTML = "결과: 승리!";
  } else if (((i % 3) + 1 == 1) & (j == 3)) {
    result.innerHTML = "결과: 승리!";
  } else if (((i % 3) + 1 == 2) & (j == 3)) {
    result.innerHTML = "결과: 패배..";
  } else if (((i % 3) + 1 == 3) & (j == 1)) {
    result.innerHTML = "결과: 패배..";
  } else if (((i % 3) + 1 == 1) & (j == 2)) {
    result.innerHTML = "결과: 패배..";
  }
});

let render = setInterval(function () {
  i++;
  let dropzone = document.querySelector(".dropzone");
  dropzone.setAttribute("src", (i % 3) + 1 + ".png");
}, 100);
