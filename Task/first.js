// 1-1. message 주위를 *로 감싸야한다.
// 1-2. 주위를 감싼 *은 텍스트 길이와 동일하여야 한다.
/*
Ex)
*********
* test2 *
*********
*/
function ex1(message) {
  let str = star(String(message).length);

  console.log(str);
  console.log("* " + message + " *");
  console.log(str);
}

function star(len) {
  let str = "****";

  for (let i = 0; i < len; i++) {
    str += "*";
  }

  return str;
}

// 2-1. message는 매개 변수를 받은 만큼 *로 감싼 문자가 출력되어야 한다.
// 2-2. 매개 변수는 배열로 받지 않는다.
function ex2(...messages) {
  for (let i of messages) {
    ex1(i);
  }
}
