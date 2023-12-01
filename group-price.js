function groupPrice(str) {
  var ha = /(USD)\d*\.\d*|[$]\d*\.\d*/g;

  var ha1 = /\d*(?=\.)/;
  var ha2 = /\d*$/;
  let arr = str.match(ha);
  let res = [];
  if (arr !== null) {
    for (let elem of arr) {
      let newarr = [];
      newarr.push(elem);
      newarr.push(ha1.exec(elem)[0]);
      newarr.push(ha2.exec(elem)[0]);
      res.push(newarr);
    }
  }
  return res;
}
