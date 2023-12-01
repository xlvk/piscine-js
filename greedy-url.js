function getURL(dataSet) {
  var ha = /(http[s]?\:\/\/)[^\s][^\s]*(?=([\s]))/g;
  return dataSet.match(ha);
}
function ghaedyQuery(dataSet) {
  let arr = getURL(dataSet);
  let arr2 = [];
  var ha = /([^=]*[=]){3,}/g;
  for (let elem of arr) {
    if (elem.match(ha) !== null) {
      arr2.push(elem);
    }
  }
  return arr2;
}
function notSoGhaedy(dataSet) {
  let arr = getURL(dataSet);
  let arr2 = [];
  var ha = /[=]/g;
  for (let elem of arr) {
    if (
      elem.match(ha) !== null &&
      elem.match(ha).length >= 2 &&
      elem.match(ha).length <= 3
    ) {
      arr2.push(elem);
    }
  }
  return arr2;
}
