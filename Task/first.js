// 1-1. message 주위를 *로 감싸야한다.
// 1-2. 주위를 감싼 *은 텍스트 길이와 동일하여야 한다.
/*
Ex
*********
* test2 *
*********
*/

// 2-1. message는 매개 변수를 받은 만큼 *로 감싼 문자가 출력되어야 한다.
// 2-2. 매개 변수는 배열로 받지 않는다.
// 1-1
function printer(message) {
  console.log("**********");
  console.log("*" + message + "*");
  console.log("**********");
}
// 1-2
function printer2(message) {
  let string = String(message);
  let str = "";
  for (let i = 0; i < string.length; i++) {
    str += "*";
  }
  console.log("**" + str);
  console.log("*" + message + "*");
  console.log("**" + str);
  str = "";
}
// 2-2, 2-1
function printer3(a, b) {
  for (let i of arguments) {
    printer2(i);
  }
}
printer3("str", "str2");
