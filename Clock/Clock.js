const $title = document.querySelector(".title");

const utilTime = (hours, minutes, seconds) => {
    let meridiemText = "";
    
    if(hours > 12) {
        meridiemText = "PM";    
        hours -= 12;
    } else {
        meridiemText = "AM";
        if(hours === 0) {
            hours = 12;
        };
    };

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${meridiemText} ${hours}:${minutes}:${seconds}`;
};

const watch = () => {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const resultTime = utilTime(hours, minutes, seconds);

    $title.innerText = resultTime;
};

watch();

setInterval(() => {
    watch();
}, 1000);
