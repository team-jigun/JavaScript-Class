// 1-1. message 주위를 *로 감싸야한다.
// 1-2. 주위를 감싼 *은 텍스트 길이와 동일하여야 한다.
/*
Ex)
*********
* test2 *
*********
*/

function text(message) {
  star = "**";
  for(let i = 0; i < message.length; i++){
    star += "*";
  }
  const text = `* ${message} *`;
  console.log(star);
  console.log('*' + message + '*');
  console.log(star);
}
text("chlalsrl");
// 2-1. message는 매개 변수를 받은 만큼 *로 감싼 문자가 출력되어야 한다.
// 2-2. 매개 변수는 배열로 받지 않는다.

function printer(...rest) {
  for(let i of rest) {
    text(i);
  }
}