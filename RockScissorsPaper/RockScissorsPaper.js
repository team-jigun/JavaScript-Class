let interval, selected, i = 0;

function s() {
    interval = setInterval(() => {
        if (i == 3) i = 1;
        else i++;
        document.querySelector('.computerRSP').setAttribute('src', `./image/${i}.png`);
    }, 500);
}

function sp() {
    clearInterval(interval);
    interval = null;
}

s();

window.onload = () => {
    const k = ['rock', 'scissors', 'paper'];
    for (const v of document.querySelector('.user').childNodes) {
        v.addEventListener('dragstart', () => {
            selected = k.indexOf(v.className) + 1;
        });
    }
    
    document.querySelector('.dropzone').addEventListener('dragleave', () => {
        let result;
        if (selected == i) result = 'DRAW';
        else if (selected - i == 1 || selected - i == -2) result = 'LOSE';
        else result = 'WIN';
        document.querySelector('.body').innerHTML = result;
        sp();
    });
};