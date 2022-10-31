// // var a = 10;
// let b = 10;
// const c = 10;

// var a = 10;
// console.log(a);

// // let a = 10; const a = 10;// 재선언 안됌

// function addWithConstantVariable(num) {
//   if (num < 0) {
//     throw Error("num은 항상 음수면 안됩니다.");
//   }
//   // num 은 숫자 값이어야합니다.
//   if (typeof num !== "number") {
//     throw Error("num은 숫자여야 합니다.");
//   }
//   // 3. 정해진 상소가 있고, 이 상수와 매개변수를 더해서 반환한다.
//   const ADD_VARIABLE = 26;
//   return ADD_VARIABLE + num;
// }

// // console.log(add(10));
// const num = "";
// // console.log(addWithConstantVariable);

const addWithConstantVriable = (num) => {
  if (num < 0) {
    throw Error("num은 항상 음수면 안됩니다.");
  }
  if (typeof num !== "number") {
    throw Error("num은 숫자여야 합니다.");
  }
  const ADD_VARIABLE = 26;
  return ADD_VARIABLE + num;
};
console.log(addWithConstantVariable(10));

// 1. 마이너스 값이 들어오면 안댐
// 2. 정해진 상수가 있고, 이 상수와 매개 변수를 더해서 반환한다.

// 1. 지역 변수
// 2. 전역 변수
// 3. 매개 변수
