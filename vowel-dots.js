var vowels = /[a|i|u|e|o]/gi;
function vowelDots(str) {
  let mat = str.match(vowels);
  if (mat === null) {
    return str;
  }
  let newstr = str.replace(vowels, "%");
  for (let i = 0; i < mat.length; i++) {
    let b = /[%]/g;
    newstr = newstr.replace(b.exec(newstr), mat[i] + ".");
  }
  return newstr;
}
