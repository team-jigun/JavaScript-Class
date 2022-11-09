var a = 10;
let b = 10;
const c = 10;

/*
1.코드 가독성
2.중복선언을 방지할 수 있다.
3.사용자(개발자)의 의도를 분명히 할수있다
*/

function add() {}

const ADD_VARIABLE = 10;

for (let i = 10; i < 10; i++) {
  if (i < 0) {
    console.log("i가 마이너스 입니다");
    return;
  }
  console.log(ADD_VARIABLE + i);
}

const minusValue = -1;
if (minusValue < 0) {
  console.log("i가 마이너스 입니다");
  return;
}

console.log(ADD_VARIABLE + minusValue);

/*
1.마이너스 값이 들어오면 안된다.
2. 정해진 상수가 없고, 이 상수와 매개변수들 더해서 반환한다
*/
let first = 10;
function main() {
  let innerFirst = 10;
  console.log(first);
}

main();
function main2(printMassage) {
  console.log(printMassage);
}
main2("asd");
/*
function add(num) {
  // 1. 마이너스 값이 들어오면 안된다.
  if (num < 0) {
    throw Error("num은 항상 양수여야 합니다");
  }
  //2. num은 숫자 값이어야 한다.
  if (typeof num !== "number") {
    throw Error("num은 숫자이어야 합니다.");
  }
  //3. 정해진 상수가 있고, 이 상수와 매개 변수를 더해서 반환한다
  const ADD_VARIABLE = 26;
  return ADD_VARIABLE + num;
}
console.log(add(10));
*/

const addWithConstantVariavle = (num) => {
  if (num < 0) {
    throw Error("num은 항상 양수여야 합니다");
  }
  //2. num은 숫자 값이어야 한다.
  if (typeof num !== "number") {
    throw Error("num은 숫자이어야 합니다.");
  }
  //3. 정해진 상수가 있고, 이 상수와 매개 변수를 더해서 반환한다
  const ADD_VARIABLE = 26;
  return ADD_VARIABLE + num;
};

console.log(addWithConstantVariavle(10));

/*
1. 마이너스 값이 들어오면 안된다.
2.정해진 상수가있고, 이 상수와 매개변수를 더해서 변환한다
*/
/*
1.지역변수
2.전역변수
3.매개변수
*/
