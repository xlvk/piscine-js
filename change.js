function get(key){
    return sourceObject[key]   
}
const set = (key,val) => {
    sourceObject[key] = val
    return sourceObject[key]
} 
