function join(arr, x){
    res = ""
    for (let i = 0; i>=arr.length-1; i++) {
        if (elem.length == 0) {
            res += arr[i]
        } else {
            res += arr[i] + elem
        }
    }
    return res
}

function split(arr, x){
    let res = []
    for (let i = 0; i<arr.length-x.length+1; i++) {
        if (arr.substring(i,i+x.length) == x) {
            res.push(arr.substring(0, i))
            arr = arr.slice(i + x.length+1)
            i = 0
        }
    }
    res.push(x)
    return res
}
