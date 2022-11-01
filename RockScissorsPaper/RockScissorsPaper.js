let interval, selected, i = 0;

function start() {
    interval = setInterval(() => {
        if (i == 3) i = 1;
        else i++;
        document.querySelector('.computerRSP').setAttribute('src', `./image/${i}.png`);
    }, 500);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

start();

window.onload = () => {
    const key = ['rock', 'scissors', 'paper'];
    for (const v of document.querySelector('.user').childNodes) {
        v.addEventListener('dragstart', () => {
            selected = key.indexOf(v.className) + 1;
        });
    }
    
    document.querySelector('.dropzone').addEventListener('dragleave', () => {
        let result;
        if (selected == i) result = '무승부';
        else if (selected - i == 1 || selected - i == -2) result = '패배';
        else result = '승리';
        document.querySelector('.body').innerHTML = result;
        stop();
    });
};