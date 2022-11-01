function time(){
    let day = new Date();
    console.log(day);
    let ho = String(day.getHours()).padStart(2, "0");
    let mi = String(day.getMinutes()).padStart(2, "0");
    let se = String(day.getSeconds()).padStart(2, "0");

    let title = document.querySelector(".title")

    title.innerHTML = `${ho}:${mi}:${se}`;
}


window.onload = () => {
    time()
    setInterval(time, 1000)
}