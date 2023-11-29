function reverse(x){
    if(typeof x === 'string') {
        let res = ""
        for (let i = x.length-1; i>0; i--) {
            res+=x[i]
        }
    } else if (Array.isArray(x)) {
        let res = []
        for (let i = x.length-1; i>0; i--) {
            res.push(x[i])
        }
    }
    return res
}