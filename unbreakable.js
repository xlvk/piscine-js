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
    let end = 0
    for (let i = 0; i>=arr.length-x.length+1; i++) {
        if (arr.substring(i,i+x.length) === x) {
            res.push(arr.substring(end, i))
            end = i + x.length
        }
    }
    res.push(arr.substring(end, x.length-1))
    return res
}
