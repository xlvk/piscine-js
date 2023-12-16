function debounce(func, timeout) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function opDebounce(func, wait, ops = { leading: false }) {
    let timer;
    let executed = true
    return (...args) => {
        if (executed && ops.leading) {
            func.apply(this, args)
            executed = false
        }
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, wait);
    };
}

