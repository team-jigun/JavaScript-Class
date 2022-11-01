const $ = e => document.querySelector(e);

const $body = $("body");
const $target = $(".computerRSP");
const $text = $(".body");
const $userTargets = [...document.querySelectorAll(".user img")];

$target.id = "1";
let count1 = 1;
let count2 = 1;
let timer = null;
const changeImage = () => {
    if (count1 == 3) {
        count1 = 0;
    }

    count1++;
    $target.id = count1;
    $target.src = `./image/${count1}.png`;
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
            if(e.target.className !== t.className) return;
        });
        $body.addEventListener("dragover", (e) => {
            if (e.target.id !== $target.id) return;
            if ($text.innerText != "결과") return;
            resultGame(t.className, $target.id);
        });
    });
};

const resultGame = (user, bot) => {
    if ((user == "rock" && bot == "2") || (user == "scissors" && bot == "3") || (user == "paper" && bot == "1")) {
        $text.innerText = "승리";
    } else if ((user == "rock" && bot == "1") || (user == "scissors" && bot == "2") || (user == "paper" && bot == "3")) {
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