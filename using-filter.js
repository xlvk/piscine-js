const filterShortStateName = (n) => n.filter((str) => str.length < 7)
const vowels = /^[aeiou]/i
const filterStartVowel = (n) => n.filter((str) => vowels.test(str) )
const filter5Vowels = (arr) => {
  return arr.filter((str) => {
    const vowelCount = (str.match(/[aeiou]/gi) || []).length;
    return vowelCount >= 5;
  });
};
const filter1DistinctVowel = (arr) => {
  return arr.filter((str) => {
    const vowels = new Set(str.toLowerCase().match(/[aeiou]/g));
    return vowels.size === 1;
  });
};
const multiFilter = (arr) => {
  return arr.filter((obj) => {
    const capital = obj.capital || '';
    const name = obj.name || '';
    const tag = obj.tag || '';
    const region = obj.region || '';
    const hasLongCapital = capital.length >= 8;
    const startsWithVowel = !/^[aeiou]/i.test(name);
    const hasVowelInTag = /[aeiou]/i.test(tag);
    const isNotSouthRegion = region.toLowerCase() !== 'south';
    return hasLongCapital && startsWithVowel && hasVowelInTag && isNotSouthRegion;
  });
};
