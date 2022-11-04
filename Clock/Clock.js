function time(){
    const day = new Date();
    const ho = String(day.getHours()).padStart(2, "0");
    const mi = String(day.getMinutes()).padStart(2, "0");
    const se = String(day.getSeconds()).padStart(2, "0");

    const title = document.querySelector(".title")

    title.innerHTML = `${ho}:${mi}:${se}`;
}


window.onload = () => {
    time()
    setInterval(time, 1000)
}