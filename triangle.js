function triangle(shape,Size){
    let z = ""
    for (let i = 1 ; i <= Size ; i++) {
    z += shape.repeat(i)
    if (i!=Size) {
        z+="\n"
    }
    }
    return z
}
