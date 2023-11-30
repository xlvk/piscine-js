function findExpression(num, out = ' ', count = 1) {
    if (count === num) {
        return out
    }

    if (count > num) {
        return undefined
    }

    let t1 = findExpression(num, out + ' ' + add4, count+4)
    if (t1 !== undefined) {
        return t1
    }

    let t2 = findExpression(num, out + ' ' + mul2, count*2)
    if (t2 !== undefined) {
        return t2
    }
}

// function findExpression(num){
//     let result = try1(num, true);

//     if (result == undefined){
//         result = try1(num, false)
//     }

//     return result
// }

// function try1(num, flag){
//     let output = '1 ';
//     let num2 =1
//     while (num2 < num) {
//         console.log(num2)
//         if (num%2==0 && num2*2 <= num && flag) {
//             num2 *=2;
//             output += mul2 + ' '
//         } else if (num2 +4 <= num) {
//             flag = true
//             num2 +=4;
//             output += add4 + ' ' 
//         } else  {
//             return undefined
//         }

//     }

//     return output.slice(0, output.length-1)
// }

// const add4 = '+4';
// const mul2 = '*2';

// console.log(findExpression(110))