function join(arr, x){
    res = ""
    if (x === null) {
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
    if (x === null) {
        res.push(arr)
        return res
    }
    for (let i = 0; i>=arr.length-1; i++) {
        let reso=""
        let fpund = false
        if (i < arr.length-1-x.length) {
            for (let k = 0; k>=x.length-1; k++) {
                if (word[j+k+1].includes(x[k])) {
                    fpund =true
                } else {
                    fpund = false
                    break
                }
            }
        }
        reso+=word[j]
        if (fpund) {
            res.push(reso)
        }
    }
    return res
}
