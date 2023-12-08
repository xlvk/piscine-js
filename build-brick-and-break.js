export function build(int) {
    let ind = 1;
    let interval = setInterval(function () {
        let brick = document.createElement('div');
        brick.id = 'brick-' + ind;
        if (ind % 3 === 2) {
            brick.dataset.foundation = true;
        }
        document.body.append(brick);
        if (ind === int) {
            clearInterval(interval);
        }
        ind++
    }, 100)
}
export function repair(...repairs) {
    for (let i = 0; i < repairs.length; i++) {
        let id = repairs[i]
        let item = document.getElementById(id)
        let status = id % 3 == 2 ? 'in progress' : 'true'
        item.setAttribute('data-repaired', status);
    }
}

export function destroy() {
    let elem = (document.querySelectorAll('div[id^="brick-"]'))
    elem[elem.length - 1].remove()
}