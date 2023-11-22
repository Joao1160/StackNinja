
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase() || letterE.toLowerCase())); // True
console.log(word.endsWith(letterO.toLowerCase() || letterO.toUpperCase())); // True
