var a = 10;
let b = 10;
const c = 10;

var first = 10;
for (let i = 0; i < first; i++) {
    console.log(i)

    const result = "result";
}
/*
var를 안쓰는 이유 
    1. 사용자(개발자)의 의도와 상관없이 전역변수로 선언된다
 */

function add(num) {
    if(num < 0){
        throw Error("num은 음수면 안됩니다")
    }

    if(typeof num !== "number"){
        throw Error("num은 숫자이어야 합니다")
    }

    const ADD_VARIABLE = 26;
    return ADD_VARIABLE + num;
}

console.log(add(10))