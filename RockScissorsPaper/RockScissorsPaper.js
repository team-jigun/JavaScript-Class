let rock = document.querySelector(".rock")
let scissors = document.querySelector(".scissors")
let paper = document.querySelector(".paper")
let dropzone = document.querySelector('.dropzone')
let body = document.querySelector(".body")
let comRSP = document.querySelector('.computerRSP')
let player;
let bot;
let i = 1;

function change_RSP() {
    bot = i
    dropzone.src = `./image/${i++}.png`
    if(i > 3){
        i = 1
    }   
}
let rnt
window.onload = () => {
    rnt = setInterval(change_RSP, 1000)
}

rock.addEventListener("dragstart", ()=>{
    player = 1; 
})
scissors.addEventListener("dragstart", ()=>{
    player = 2; 
})
paper.addEventListener("dragstart", ()=>{
    player = 3; 
})

comRSP.addEventListener("dragenter", ()=>{
    console.log(player)
    if(bot == player){
        body.innerText = `결과: 무승부`
    }else if(bot == 1 && player == 3){
        body.innerText = `결과: 플레이어 승리!!`
    }else if(bot == 3 && player == 1){
        body.innerText = `결과: 플레이어 패배...`
    }else if(bot > player){
        body.innerText = `결과: 플레이어 승리!!`
    }else if(bot < player){
        body.innerText = `결과: 플레이어 패배...`
    }
    clearInterval(rnt)
})