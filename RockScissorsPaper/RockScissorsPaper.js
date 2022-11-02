const $body = document.querySelector("body");
const $target = document.querySelector(".computerRSP");
const $text = document.querySelector(".body");
const $userTargets = document.querySelectorAll(".user img");

$target.id = "rock";
let timer = null;
let userSelectDrag = null;

const changeImage = () => {
    const randomNum = parseInt(Math.random() * 3) + 1;
    $target.id = randomNum === 1 ? "rock" :  randomNum === 2 ? "scissors" : randomNum === 3 ? "paper" : "";
    $target.src = `./image/${randomNum}.png`;
};

const timerHandle = () => {
    timer = setInterval(() => {
        changeImage();
    }, 1000);
};

timerHandle();

const startGame = () => {
    for(let i = 0; i < $userTargets.length; i++) {
        $body.addEventListener("dragstart", (e) => {
            userSelectDrag = e.target;
        });
        $body.addEventListener("dragenter", (e) => {
            if (e.target.id !== $target.id) return;
            if ($text.innerText != "결과") return;
            resultGame(userSelectDrag.className, $target.id);
        });
    };
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