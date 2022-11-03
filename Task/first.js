// 1-1. message 주위를 *로 감싸야한다.
// 1-2. 주위를 감싼 *은 텍스트 길이와 동일하여야 한다.
/*
Ex)
*********
* test2 *
*********
*/

// 2-1. message는 매개 변수를 받은 만큼 *로 감싼 문자가 출력되어야 한다.
// 2-2. 매개 변수는 배열로 받지 않는다.
function printer(...args) {
  const max = Math.max(...[...args].map(v => String(v).length));
  console.log('*'.repeat(max + 4));
  for (let v of args) {
    const space = max - String(v).length;
    console.log(`* ${' '.repeat((space + 1) / 2)}${v}${' '.repeat(space / 2)} *`);
  }
  console.log('*'.repeat(max + 4));
}

printer('test2', 199999, 1271799);