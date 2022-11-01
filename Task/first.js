// 1-1. message 주위를 *로 감싸야한다.
// 1-2. 주위를 감싼 *은 텍스트 길이와 동일하여야 한다.
/*
Ex)
*********
* test2 *
*********
*/
function printer1(test2) {
  let result = max(arguments) + 2;
  console.log("*".repeat(result))
    console.log("*" + test2 + "*")
  console.log("*".repeat(result))
}


// 2-1. message는 매개 변수를 받은 만큼 *로 감싼 문자가 출력되어야 한다.
// 2-2. 매개 변수는 배열로 받지 않는다.
function printer2() {
  let result = max(arguments) + 2;
  console.log('*'.repeat(result + 2));
  for (let i of arguments) {
    console.log(
      '*' +
      ' '.repeat((result - String(i).length + 1) / 2) +
      i +
      ' '.repeat((result - String(i).length) / 2) +
      '*'
    );
  }
  console.log('*'.repeat(result + 2));  
}

function max(args) {
  let result = -2147483648;
  for (let i of args) {
    if (result < String(i).length) result = String(i).length;
  }
  return result;
}