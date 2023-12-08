export function getArchitects() {
    let res = [];
    let taga = document.getElementsByTagName('a');
    let tagb = document.getElementsByTagName('span');
    let a = Array.from(taga)
    let b = Array.from(tagb)
    res.push(a);
    res.push(b);
    return res;
}

export function getClassical() {
    let res = [];
    let taga = document.getElementsByClassName('classical');
    let tagb = document.querySelectorAll('a:not(classical)');
    let a = Array.from(taga)
    let b = Array.from(tagb)
    res.push(a);
    res.push(b);
    return res;
}

export function getActive() {
    let res = [];
    let taga = document.getElementsByClassName('classical active');
    let tagb = document.querySelectorAll('a.classical:not(active)');
    let a = Array.from(taga)
    let b = Array.from(tagb)
    res.push(a);
    res.push(b);
    return res;
}

export function getBonannoPisano() {
    let res = [];
    let taga = document.getElementById('BonannoPisano');
    let tagb = document.querySelectorAll('a.classical.active:not(BonannoPisano)');
    let b = Array.from(tagb)
    res.push(taga);
    res.push(b);
    return res;
}