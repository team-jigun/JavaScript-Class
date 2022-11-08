function addWithConstantVariable(num) {
  if (num < 0) {
    throw Error("num이 음수입니다");
  }
  if (typeof num !== "number") {
    throw Error("num이 숫자가 아닙니다");
  }
  const value = 26;

  return value + num;
}
