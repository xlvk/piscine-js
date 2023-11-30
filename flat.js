function flat(arr, depth = 1) {
    if (depth > 0) {
        return arr.reduce((acc, val) => {
            if (Array.isArray(val)) {
                return acc.concat(flat(val, depth - 1))
            }
            return acc.concat(val)
        }, [])
    }
    return arr.slice()
}
