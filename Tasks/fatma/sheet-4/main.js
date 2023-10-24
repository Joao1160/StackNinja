window.onload = function () {
    // assignment 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.floor(100000.3)); // 100000
console.log(Math.ceil(99999.4)); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(Math.trunc(100000.6)); // 100000
console.log(Number(100000.02.toFixed(0))); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.max(100000, 100, 123)); // 100000
console.log(Math.min(100000, 1000000, 100000000)); // 100000
console.log(parseInt(100000.03)); // 100000
console.log(10 ** 5); // 100000

/////////////////////////////

    // assignment 2
    console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991

//////////////////////////////

    // assignment 3
    console.log(('$(Number.MAX_SAFE_INTEGER)'.length) - 10); // 16

///////////////////////////////////

    // assignment 4
    let myVar = "100.56789 Views";

    console.log(parseInt(myVar)); // 100
    console.log(parseFloat(myVar).toFixed(2)); // 100.57

////////////////////////////////////

    // assignment 5
    let num = 10;
    
    console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

    ////////////////////////////////////

    // assignment 5
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10

    ////////////////////////////////////

    // assignment 5
    console.log((Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4
}