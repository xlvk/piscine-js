function letterSpaceNumber(str) {
  var r = /(\w\s\d)(?!(\w))/g;
  if (str.match(r) == null) {
    return [];
  }
  return str.match(r);
}
