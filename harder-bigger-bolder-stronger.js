export function generateLetters() {
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let body = document.querySelector('body')
    let fWeight = 300;
    for (let i = 11; i < 131; i++) {
        if (i < 51) {
            fWeight = 300;
        }
        else if (i < 91) {
            fWeight = 400;
        }
        else {
            fWeight = 600;
        }
        let res = document.createElement('div');
        let char = alph.charAt(Math.random() * res.length);
        res.textContent = char;
        res.setAttribute("style", "font-size:" + i + "px; font-weight: " + fWeight + ";")
        body.appendChild(res);
    }
}