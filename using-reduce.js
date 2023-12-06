const adder = (arr, initialValue = 0) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
};
const sumOrMul = (arr, initialValue = 0) => {
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      return accumulator * currentValue;
    } else {
      return accumulator + currentValue;
    }
  }, initialValue);
};
const funcExec = (arr, initialValue) => {
  return arr.reduce((accumulator, currentFunction) => {
    return currentFunction(accumulator);
  }, initialValue);
};