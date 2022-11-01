const $ = e => document.querySelector(e);

const $body = $("body");
const $target = $(".computerRSP");
const $text = $(".body");
const $userTargets = [...document.querySelectorAll(".user img")];

$target.id = "rock";
let count = 1;
let timer = null;
let eventTarget = null;

const changeImage = () => {
    if (count == 3) {
        count = 0;
    }

    count++;
    $target.id = count == 1 ? "rock" :  count == 2 ? "scissors" : count == 3 ? "paper" : "";
    $target.src = `./image/${count}.png`;
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
        $body.addEventListener("dragover", (e) => {
            if (e.target.id !== $target.id) return;
            if ($text.innerText != "결과") return;
            resultGame(eventTarget.className, $target.id);
        });
    });
};

const resultGame = (user, bot) => {
    if ((user == "rock" && bot == "scissors") || (user == "scissors" && bot == "paper") || (user == "paper" && bot == "rock")) {
        $text.innerText = "승리";
    } else if ((user == bot) || (user == "scissors" && bot == "scissors") || (user == "paper" && bot == "paper")) {
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