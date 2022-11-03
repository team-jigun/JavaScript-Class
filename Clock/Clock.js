const clock = document.querySelector('.title');

function changeTime(){
    const time = new Date();
    const ho = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    clock.innerText = `${ho}:${min}:${sec}`
}


setInterval(changeTime, 1000);


