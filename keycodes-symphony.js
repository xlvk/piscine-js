export function compose() {

    document.addEventListener('keydown', key => {
        if (key.key === 'Backspace') {
            let all = document.querySelectorAll('div')
            all[all.length - 1].remove()

        }
        else if (key.key === 'Escape') {
            let all = document.querySelectorAll('div')
            for (let i = 0; i < all.length; i++) {
                all[i].parentNode.removeChild(all[i]);
            }
        }
        else {
            let div = document.createElement('div');
            div.className = 'note'
            document.body.appendChild(div)
            div.innerHTML = key.key
            div.style.backgroundColor = `rgb(32,156,${key.keyCode})`
        }
    })
}