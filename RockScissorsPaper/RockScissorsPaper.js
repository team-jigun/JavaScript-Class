let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let dropzone = document.querySelector(".dropzone");
let imgcount = 1;
let RSP = 0;
let body = document.querySelector(".body");
window.onload = () => {
  setInterval(() => {
    if (imgcount >= 3) {
      imgcount = 0;
    }
    dropzone.setAttribute("src", `./image/${++imgcount}.png`);
    console.log(imgcount);
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

  dropzone.addEventListener("dragenter", () => {
    if (imgcount == 1) {
      if (RSP == 1) {
        console.log("비김");
      }
      if (RSP == 2) {
        console.log("짐");
      }
      if (RSP == 3) {
        console.log("이김");
      }
    }

    if (imgcount == 2) {
      if (RSP == 1) {
        console.log("이김");
      }
      if (RSP == 2) {
        console.log("비김");
      }
      if (RSP == 3) {
        console.log("짐");
      }
    }
    
    if (imgcount == 3) {
      if (RSP == 1) {
        console.log("짐");
      }
      if (RSP == 2) {
        console.log("이김");
      }
      if (RSP == 3) {
        console.log("비김");
      }
    }
  });
};
