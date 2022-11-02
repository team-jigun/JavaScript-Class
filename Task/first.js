// 1-1. message 주위를 *로 감싸야한다.
// 1-2. 주위를 감싼 *은 텍스트 길이와 동일하여야 한다.
/*
Ex1)
*********
* test2 *
*********

*/
function test(msg) {
  let massage1 = msg.length;
  let star = "";
  for (let i = 1; i <= massage1+4; i++) {
    star += "*";
  }
  console.log(star);
  console.log("* " + msg + " *");
  console.log(star);
  
}

test("test2");
// 2-1. message는 매개 변수를 받은 만큼 *로 감싼 문자가 출력되어야 한다.
// 2-2. 매개 변수는 배열로 받지 않는다.
function printer(message) {
  for(let i of arguments){
    test(i)
  }
}

printer("keyboard","love");