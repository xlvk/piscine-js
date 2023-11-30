function pyramid (str, num){
    num = num*2 -1
    let output = '';
    for (let i=1; i<=num; i+=2) {
        output += ' '.repeat((str.length*(num-i))/2) + str.repeat(i) + '\n'
    }
    return output.slice(0, output.length-1)
}

console.log(pyramid("{}",5))