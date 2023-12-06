const longWords = (arr) => arr.every((word) => typeof word === 'string' && word.length >= 5);
const oneLongWord = (arr) => arr.some((word) => typeof word === 'string' && word.length >= 10);
const noLongWords = (n) => n.every((z) => !( typeof z == "string" && z.length >= 7 ));