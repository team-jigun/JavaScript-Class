let dropzone = document.querySelector(".dropzone");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let result = document.querySelector(".body");
let den = 0; // Drag Enter Num
let dsn = 0; // Drag Start Num

rock.addEventListener("dragstart", () => {
  dsn = 1;
});

scissors.addEventListener("dragstart", () => {
  dsn = 2;
});

paper.addEventListener("dragstart", () => {
  dsn = 3;
});

dropzone.addEventListener("dragenter", () => {
  clearInterval(render);

  if ((den % 3) + 1 == dsn) {
    result.innerHTML = "결과: 비겼습니다.";
  } else if (((den % 3) + 1 == 2) & (dsn == 1)) {
    result.innerHTML = "결과: 승리!";
  } else if (((den % 3) + 1 == 3) & (dsn == 2)) {
    result.innerHTML = "결과: 승리!";
  } else if (((den % 3) + 1 == 1) & (dsn == 3)) {
    result.innerHTML = "결과: 승리!";
  } else if (((den % 3) + 1 == 2) & (dsn == 3)) {
    result.innerHTML = "결과: 패배..";
  } else if (((den % 3) + 1 == 3) & (dsn == 1)) {
    result.innerHTML = "결과: 패배..";
  } else if (((den % 3) + 1 == 1) & (dsn == 2)) {
    result.innerHTML = "결과: 패배..";
  }
});

let render = setInterval(function () {
  den++;
  let dropzone = document.querySelector(".dropzone");
  dropzone.setAttribute("src", "./image/" + ((den % 3) + 1) + ".png");
}, 1000);
