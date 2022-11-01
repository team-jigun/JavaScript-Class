
const clock = document.querySelector(".clock");


const clockTitle = clock.querySelector("h1");


function Time(){
    const date = new Date();
    const hour = date.getHours(); 
    const minute = date.getMinutes(); 
    const second = date.getSeconds(); 
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

function show(){
    Time();
    setInterval(Time,1000);
}
show();