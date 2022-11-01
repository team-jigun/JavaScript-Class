const $ = e => document.querySelector(e);
const $title = $(".title");

const textPad = str => String(str).padStart(2, "0");

const watch = () => {
    const time = new Date();

    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    let text = "";

    if(hours > 12) {
        text = "PM";    
        hours -= 12;
    } else {
        text = "AM";
        if(text == "AM" && hours === 0) {
            hours += 12;
        };
    };

    $title.innerText = `${text} ${textPad(hours)}:${textPad(minutes)}:${textPad(seconds)}`;

    setTimeout(() => {
        watch();
    }, 1000);
}

watch();