const $title = document.querySelector(".title");

const timePad = time => {
    if(typeof time !== "number") {
        throw Error("time의 타입이 number가 아닙니다.");
    };

    return String(time).padStart(2, "0");
};

const watch = () => {
    const time = new Date();

    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    let meridiemText = "";

    if(hours > 12) {
        meridiemText = "PM";    
        hours -= 12;
    } else {
        meridiemText = "AM";
        if(meridiemText === "AM" && hours === 0) {
            hours += 12;
        };
    };

    $title.innerText = `${meridiemText} ${timePad(hours)}:${timePad(minutes)}:${timePad(seconds)}`;
};

watch();

setInterval(() => {
    watch();
}, 1000);
