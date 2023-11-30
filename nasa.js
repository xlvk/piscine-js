function nasa(N) {
    let z = ""
    for(let i = 1 ; i <= N;i++){
        if (i%3 == 0) {
            z += "NA"
        } 
        if (i%5 == 0) {
            z+= "SA" 
        } else if (!(i%3 == 0)){
            z += i.toString()
        }
        if (i != N) {
            z+= " "
        }
    }
    return z
}

console.log(nasa(15))
