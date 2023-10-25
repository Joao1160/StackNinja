let userName = "Elzero";
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(-3,-2)); // e
console.log(userName[3]); // e
console.log(userName.charAt(3).repeat(3)); // eee
console.log("");

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.startsWith("E"));
console.log(word.includes(letterZ));
console.log(word.includes(letterO.toLowerCase()));
