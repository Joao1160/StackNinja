
// Solutions
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(100000.0); // 100000
console.log(100*100*10); // 100000
console.log(50000+50000); // 100000
console.log(20000*5); // 100000
console.log(10000*10); // 100000
console.log(50_000 + 50_000); // 100000
console.log("");

console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991
console.log("");

console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16
console.log("");

let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2)));// 100.57
console.log("");

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2
console.log("");

let flt = 10.4;
console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log("");

console.log(Math.floor(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4




