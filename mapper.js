unction map(n,func) {
    let arr = []
    for (let i = 0 ; i < n.length ; i++) {
        arr.push(func(n[i],i,n))
    }
    return arr
}
function flatMap(n, func) {
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    const result = func(n[i], i, n);
    if (Array.isArray(result)) {
      arr.push(...result);
    } else {
      arr.push(result);
    }
  }
  return arr;
}