let dropzone = document.querySelector(".dropzone");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let result = document.querySelector(".body");
let DEN = 0; // Drag Enter Num
let DSN = 0; // Drag Start Num

rock.addEventListener("dragstart", () => {
  DSN = 1;
});

scissors.addEventListener("dragstart", () => {
  DSN = 2;
});

paper.addEventListener("dragstart", () => {
  DSN = 3;
});

dropzone.addEventListener("dragenter", () => {
  clearInterval(render);

  if ((DEN % 3) + 1 == DSN) {
    result.innerHTML = "결과: 비겼습니다.";
  } else if (((DEN % 3) + 1 == 2) & (DSN == 1)) {
    result.innerHTML = "결과: 승리!";
  } else if (((DEN % 3) + 1 == 3) & (DSN == 2)) {
    result.innerHTML = "결과: 승리!";
  } else if (((DEN % 3) + 1 == 1) & (DSN == 3)) {
    result.innerHTML = "결과: 승리!";
  } else if (((DEN % 3) + 1 == 2) & (DSN == 3)) {
    result.innerHTML = "결과: 패배..";
  } else if (((DEN % 3) + 1 == 3) & (DSN == 1)) {
    result.innerHTML = "결과: 패배..";
  } else if (((DEN % 3) + 1 == 1) & (DSN == 2)) {
    result.innerHTML = "결과: 패배..";
  }
});

let render = setInterval(function () {
  DEN++;
  let dropzone = document.querySelector(".dropzone");
  dropzone.setAttribute("src", "./image/" + ((DEN % 3) + 1) + ".png");
}, 1000);
