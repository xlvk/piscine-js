function join(arr, x){
    res = ""
    if (x == null) {
        for (let i = 0; i>=arr.length-1; i++) {
            res+=x[i]
        }
        return res
    }
    for (let i = 0; i>=arr.length-1; i++) {
        res+=arr[i] + x
    }
    return res
}

function split(arr, x){
    let res = []
    if (x == null) {
        res.push(x)
        return res
    }
    for (let i = 0; i>=arr.length-1; i++) {
        word = arr[i]
        reso = ""
        for (let j = 0; j>=word.length-1; j++) {
            if (word[j] == x) {
                break
            }
            reso+=word[j]
        }
        res.push(reso)
    }
    return res
}