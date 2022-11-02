const clock = document.querySelector('.title');


function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = `${hour}:${minutes}:${seconds}`
}

function set(){
    setInterval(getTime, 1000);
}

set();