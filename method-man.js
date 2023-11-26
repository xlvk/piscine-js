//This func takes a string and splits it into an array of strings by spaces.
function words(Str) {
    return Str.split(' ');
}

//This func takes an array of strings and joins them with spaces.
function sentence(arrStr) {
    return arrStr.join(' ');
}

//This function takes a string and returns it in uppercase.
function yell(str) {
    return str.toUpperCase();
}

//This function takes a string, converts it to lowercase, and surrounds it with asterisks.
function whisper(str) {
    return '*' + str.toLowerCase() + '*';
}

//This function takes a string and converts the first letter to uppercase and the rest to lowercase.
function capitalize(str) {
    return str.toUpperCase()[0] + str.slice(1).toLowerCase();
}
