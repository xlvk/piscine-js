function sameAmount(str, regular1, regular2) {
  let arr1 = [];
  let arr2 = [];
  arr1 = str.match(new RegExp(regular1, "g"));
  arr2 = str.match(new RegExp(regular2, "g"));
  if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
    return false;
  }
  if (arr1.length === arr2.length) {
    return true;
  }
  return false;
}
