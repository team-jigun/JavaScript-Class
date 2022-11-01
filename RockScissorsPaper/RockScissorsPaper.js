const $ = e => document.querySelector(e);

const $body = $("body");
const $target = $(".computerRSP");
const $text = $(".body");
const $userTargets = [...document.querySelectorAll(".user img")];

$target.id = "rock";
let timer = null;
let eventTarget = null;

const changeImage = () => {
    const num = parseInt(Math.random() * 3) + 1;
    $target.id = num === 1 ? "rock" :  num === 2 ? "scissors" : num === 3 ? "paper" : "";
    $target.src = `./image/${num}.png`;
};

const timerHandle = () => {
    timer = setInterval(() => {
        changeImage();
    }, 1000);
};

timerHandle();

const startGame = () => {
    $userTargets.map(t => {
        $body.addEventListener("dragstart", (e) => {
            eventTarget = e.target;
        });
        $body.addEventListener("dragenter", (e) => {
            if (e.target.id !== $target.id) return;
            if ($text.innerText != "결과") return;
            resultGame(eventTarget.className, $target.id);
        });
    });
};

const resultGame = (user, bot) => {
    if ((user === "rock" && bot === "scissors") || (user === "scissors" && bot === "paper") || (user === "paper" && bot === "rock")) {
        $text.innerText = "승리";
    } else if (user === bot) {
        $text.innerText = "무승부";
    } else {
        $text.innerText = "패배";
    };
    clearInterval(timer);
    stopGame();
};

const stopGame = () => {
    timerHandle();
    setTimeout(() => {
        $text.innerText = "결과";
    }, 1000);
};

startGame();