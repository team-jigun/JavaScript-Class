let com = document.querySelector(".computer > img");
let comHand = 1; // 1 = 주먹, 2 = 가위, 3 = 보

let comMove = setInterval(() => {
  comHand + 1 == 4 ? (comHand = 1) : (comHand += 1);
  com.src = "./image/" + comHand + ".png";
}, 3000);

let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let playerHand = 0;

rock.addEventListener("dragstart", () => {
  playerHand = 1;
});
scissors.addEventListener("dragstart", () => {
  playerHand = 2;
});
paper.addEventListener("dragstart", () => {
  playerHand = 3;
});

let result = document.querySelector(".body");
com.addEventListener("dragenter", () => {
  let text = "";
  if (playerHand == comHand) {
    text = "결과: 무승부";
  } else if ((comHand == 3) & (playerHand == 1)) {
    text = "결과: 패배";
  } else if ((comHand == 1) & (playerHand == 3)) {
    text = "결과: 승리";
  } else if (comHand < playerHand) {
    text = "결과: 패배";
  } else {
    text = "결과: 승리";
  }
  result.textContent = text;
});
