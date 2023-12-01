function findIP(str) {
    const ha = /((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}((:)[1-9]\d*\d\d?)*/g;
    let ha1 = str.match(ha)
    let res = [];
    for (let i = 0; i < ha1.length; i++) {
        let num = ha1[i].split(":")
        if (num[1]) {
            if (num[1] > 65535) {
                continue
            }
        }
        res.push(ha1[i])
    }
    return res
}
