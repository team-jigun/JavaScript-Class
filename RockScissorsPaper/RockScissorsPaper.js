let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let dropZone = document.querySelector(".dropZone");
let imgCount = 1;
let RSP = 0;
let body = document.querySelector(".body");
window.onload = () => {
  setInterval(() => {
    if (imgCount >= 3) {
      imgCount = 0;
    }
    dropZone.setAttribute("src", `./image/${++imgCount}.png`);
    console.log(imgCount);
  }, 100);

  rock.addEventListener("dragstart", () => {
    RSP = 1;
  });
  scissors.addEventListener("dragstart", () => {
    RSP = 2;
  });
  paper.addEventListener("dragstart", () => {
    RSP = 3;
  });

  dropZone.addEventListener("dragenter", () => {
    if (imgCount == 1) {
      if (RSP == 1) {
        body.innerText = "비겼습니다.";
      }
      if (RSP == 2) {
        body.innerText = "졌습니다.";
      }
      if (RSP == 3) {
        body.innerText = "이겼습니다.";
      }
    }

    if (imgCount == 2) {
      if (RSP == 1) {
        body.innerText = "이겼습니다.";
      }
      if (RSP == 2) {
        body.innerText = "비겼습니다.";
      }
      if (RSP == 3) {
        body.innerText = "졌습니다.";
      }
    }

    if (imgCount == 3) {
      if (RSP == 1) {
        body.innerText = "졌습니다.";
      }
      if (RSP == 2) {
        body.innerText = "이겼습니다.";
      }
      if (RSP == 3) {
        body.innerText = "비겼습니다.";
      }
    }
  });
};
