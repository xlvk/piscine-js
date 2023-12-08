const fold = (array, func, accumulator) => {
  for (let i = 0; i < array.length; i++) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
};

const foldRight = (array, func, accumulator) => {
  for (let i = array.length - 1; i >= 0; i--) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
};

const reduce = (array, func) => {
  if (array.length < 1) {
return 
  }
  let accumulator = array[0];
  for (let i = 1; i < array.length; i++) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
};

const reduceRight = (array, func) => {
  if (array.length < 1) {
return  }
  let accumulator = array[array.length - 1];
  for (let i = array.length - 2; i >= 0; i--) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
};
