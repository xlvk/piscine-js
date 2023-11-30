function chunk(arr,size) {
    if (arr.length == 0) {
        return []
    }
    let spilted = []
    for (let i = 0 ; i < arr.length ; i++ ) {
        let chunk = arr.slice(i, i + size);
        i += size-1
        spilted.push(chunk)
    }
    return spilted
}
