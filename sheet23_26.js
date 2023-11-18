// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.round(100000.4)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(Math.floor(100000.999)); // 100000
console.log(Math.max(100000, 3000)); // 100000
console.log(Math.trunc(100000.666)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 5); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.trunc(parseFloat(100000.123))); // 100000
console.log(Number(100000.455.toFixed(0))); // 100000


console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16


let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Number(parseFloat(flt).toFixed(0))); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10


console.log(Math.floor(Math.random() * 4)+1); // 0 || 1 || 2 || 3 || 4