function repeat(str, o) {
    let result = ''
    while (o > 0) {
        result = result + str
        o--
    }
    return result
}
