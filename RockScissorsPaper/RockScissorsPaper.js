let computerRSP = document.getElementsByClassName("computerRSP dropzone");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors")
let paper = document.querySelector(".paper");
let Result = document.querySelector(".body");
let player = 0;
let stoptime;
let imageArray = ["image/2.png", "image/1.png", "image/3.png"];
let imageIndex = 0;

   function changeImage() {
       computerRSP[0].setAttribute("src", imageArray[imageIndex]);
       imageIndex++;
      if (imageIndex >= imageArray.length) {
        imageIndex = 0;
      }
    }

    window.onload = () =>{
      stoptime = setInterval(changeImage, 500);
    }

    rock.addEventListener('dragstart', () => {
      player = 0;
    });
    
    scissors.addEventListener('dragstart', () => {
      player = 1;
    });
    
    paper.addEventListener('dragstart', () => {
      player = 2;
    });
    
 

  computerRSP[0].addEventListener('dragenter', () => {

    if(player === 0) {
      if(imageIndex === 2) {
        Result.innerHTML = "비겼습니다."
        clearInterval(stoptime);

      }else if (imageIndex === 1){
        clearInterval(stoptime);
        Result.innerHTML = "이겼습니다."

      }else if(imageIndex === 0){
        clearInterval(stoptime);
        Result.innerHTML = "졌습니다."
      }
    } else if(player === 1) {
      if(imageIndex === 1) {
        clearInterval(stoptime);
        Result.innerHTML = "비겼습니다."

      }else if (imageIndex === 0){
        clearInterval(stoptime);
        Result.innerHTML = "이겼습니다."

      }else if(imageIndex === 2){
        clearInterval(stoptime);
        Result.innerHTML = "졌습니다."
      }
    }else if(player === 2) {

      if(imageIndex === 0) {
        clearInterval(stoptime);
        Result.innerHTML = "비겼습니다."

      }else if (imageIndex === 2){
        clearInterval(stoptime);
        Result.innerHTML = "이겼습니다."

      }else if(imageIndex === 1){
        clearInterval(stoptime);
        Result.innerHTML = "졌습니다."
      }
    }
    setTimeout(() => {
      stoptime = setInterval(changeImage, 500);
      Result.innerHTML = "결과"
    },2000)
  });





