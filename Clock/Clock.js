const $ = e => document.querySelector(e);
const $title = $(".title");

const watch = () => {
    const time = new Date();

    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    if(hours > 12) {
        hours -= 12;
    }

    $title.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    setTimeout(() => {
        watch();
    }, 1000);
}

watch();