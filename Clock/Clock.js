const clock = document.querySelector('.title');

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clock.innerHTML = `${hour}:${minute}:${second}`
}

function set(){
    setInterval(getTime, 1000);
}

set();