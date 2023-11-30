function RNA(DNA) {
    let RNA = ""
    for (let i = 0 ; i < DNA.length ; i++) {
        if (DNA[i] == 'T') {
            RNA += 'A'
        } else if (DNA[i] == 'A') {
            RNA += 'U'
        }else if (DNA[i] == 'G') {
            RNA += 'C'
        }else if (DNA[i] == 'C') {
            RNA += 'G'
        } else {
            RNA += DNA[i]
        }
    }
    return RNA
}

function DNA(RNA) {
    let DNA = ""
    for (let i = 0 ; i < RNA.length ; i++) {
        if (RNA[i] == 'A') {
            DNA += 'T'
        } else if (RNA[i] == 'U') {
            DNA += 'A'
        }else if (RNA[i] == 'G') {
            DNA += 'C'
        }else if (RNA[i] == 'C') {
            DNA += 'G'
        } else {
            DNA += RNA[i]
        }
    }
    return DNA
}
