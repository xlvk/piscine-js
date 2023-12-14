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


// test

// const add = (arr, el) => arr.push(el)
// // async setInterval is not precise enough so I made this synchronous one
// const setIntervalSync = (fn, delay, limit = 0) => new Promise(s => {
//     let run = true
//     let count = 1
//     const start = Date.now()
//     const loop = () => {
//         const tick = Date.now()
//         const elapsed = tick - start
//         if (elapsed > count * delay) {
//             fn()
//             count++
//         }
//         elapsed < limit
//             ? setTimeout(loop)
//             : s()
//     }
//     setTimeout(loop)
// })

// const ans = async () => {
//     return await Promise.all([
//         run(opDebounce(add, 40), { delay: 20, count: 5 }),
//         run(opDebounce(add, 40), { delay: 20, count: 2 }),
//     ])
// }

// const run = async (callback, { delay, count }) => {
//     const arr = []
//     await setIntervalSync(() => callback(arr, 1), delay, count * delay + 5)
//     return arr.length
// }

// async function fetchData() {
//     try {
//         const result = await ans();
//         console.log("Promise succeeded:", result);
//     } catch (error) {
//         console.error("Promise failed:", error);
//     }
// }


// console.log(fetchData());
