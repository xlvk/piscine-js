function split(n, sp) {
    let z = [];
    let v = "";
    if (sp.length == "") {
        for (let i = 0; i < n.length; i++) {
            z.push(n[i])
        }
        return z
    }
    for (let i = 0; i < n.length; i++) {

        if (n.slice(i, i + sp.length) === sp) {
            z.push(v);
            v = "";
            if (!sp.length == "") {
            i += sp.length - 1; // Skip the separator
            }
        } else {
            v += n[i];
        }
    }
    z.push(v); // Push the remaining part of the string
    return z;
}

function join(n, jo) {
    let z = ""
    for (let i = 0; i < n.length-1; i++) {
        z += n[i] + jo
    }
    z+= n[n.length-1]
    return z
}
