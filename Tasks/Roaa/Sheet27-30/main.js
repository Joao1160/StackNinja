let userName = "Elzero";
console.log(userName.charAt(3)); // e
console.log(userName[3]); // e
console.log(userName.substring(3,4)); // e
console.log(userName.substr(3,1)); // e
console.log(userName.slice(3,4)); // e
console.log(userName.substring(userName.length -3,userName.length-2).repeat(3)); // eee



let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True