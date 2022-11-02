const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1"); 

function getTime() {
    const date = new Date();
    const hours = String(date.gethours()).padStart(2, "0");
    const min = String(date.getminutes()).padStart(2, "0");
    const sec = String(date.getseconds()).padStart(2, "0");
    clockTitle.innerText = `${hours}:${min}:${sec}`;
} 
function init() {
    getTime();
    setInterval(getTime, 1000);  // 1
}

init();
