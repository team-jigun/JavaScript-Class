let clock = document.querySelector(".title");

function Time(){
  let time = new Date();
  let hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = `${hour}:${minutes}:${seconds}`; 

}


function rerole(){
    setInterval(Time, 1000);
}

rerole();
