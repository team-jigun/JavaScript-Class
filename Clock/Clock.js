let clock = document.querySelector(".title");

function Time(){
  let time = new Date();
  let hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = `${hour<10 ? "0"+hour :hour}:${minutes<10 ? "0"+minutes :minutes}:${seconds<10 ? "0"+seconds :seconds}`; 
   
}


function rerole(){
    setInterval(Time, 1000);
}

rerole();
