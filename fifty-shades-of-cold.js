import { colors } from './fifty-shades-of-cold.data.js'

export function generateClasses() {

    let coul = document.createElement('style');
    colors.forEach(color => {
        coul.innerHTML += `.${color} {background: ${color};}`

    });
    document.head.appendChild(coul);
}

export function generateColdShades() {
    colors.forEach(color => {
        if ((/(aqua|blue|turquoise|green|cyan|navy|purple)/).test(color)) {
            let box = document.createElement('div')
            box.classList.add(color)
            box.textContent = color
            document.body.appendChild(box)
        }
    });
}

export function choseShade(shade) {
    let boxs = Array.from(document.getElementsByTagName('div'))
    boxs.forEach(box => {
        box.classList.remove(box.classList[box.classList.length - 1])
        box.classList.add(shade)
    })
}