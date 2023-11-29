function reverse(x){
    let res
    if(typeof x === 'string') {
        res = ""
        for (let i = x.length; i>0; i--) {
            res+=x[i]
        }
    } else if (Array.isArray(x)) {
        res = []
        for (let i = x.length; i>0; i--) {
            res.push(x[i])
        }
    }
    return res
}