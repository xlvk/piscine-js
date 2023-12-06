function filter(arr, func) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
function reject(collection, predicate) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (!predicate(collection[i],i,collection)) {
      result.push(collection[i]);
    }
  }
  return result;
}
function partition(collection, predicate) {
  const [pass, fail] = [[], []];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i],i,collection)) {
      pass.push(collection[i]);
    } else {
      fail.push(collection[i]);
    }
  }
  return [pass, fail];
}