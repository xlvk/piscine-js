function join(arr, x){
    res = ""
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] == '') {
            arr[i] = ' '
        }
        if (x.length == 0) {
            res += arr[i]
        } else if (i != arr.length-1){
            res += arr[i] + x
        } else {
            res += arr[i]
        }
    }
    return res
}

function split(arr, x){
    let res = []
    let count =0
    for (let i = 0; i<arr.length; i++) {
        // console.log(i, count)
        count++
        if (x.length != 0) {
            
            // console.log(arr.substring(i,i+x.length), arr, x, i, x.length, count)
            if (arr.substring(i,i+x.length) == x) {
                // if (arr.substring(0, i).length == 0 ) {
                //     res.push('')
                // } else {
                    res.push(arr.substring(0, i))
                // }
                arr = arr.slice(i + x.length)
                i = 0
            }
        } else {
            if (i < arr.length-x) {
                res.push(arr[i])
            } else {
                break
            }
        }
    }
    if (x.length != 0) {
        if (arr == x) {
            res.push('')
        } else {
            res.push(arr)
        }
    }
    return res
}

// console.log(split('a b c', ' '))
// console.log(split('ggg - ddd - b', ' - '))
// console.log(split('ee,ff,g,', ','))
// console.log(split('Riad', ' '))
// console.log(split('rrrr', 'rr'))
// console.log(split('rrirr', 'rr'))
// console.log(split('Riad', ''))
// console.log(split('', 'Riad'))

// console.log(join(['ee', 'ff', 'g', ''], ','))
// console.log(join(['ggg', 'ddd', 'b'], ' - '))
// console.log(join(['a', 'b', 'c'], ' '))