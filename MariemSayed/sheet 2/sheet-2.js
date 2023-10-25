// Add Variables Here
let NumberOne = 10;
let NumberTwo = 20;


// Ouput
console.log(NumberOne + "" +NumberTwo ); // Normal Concatenate => 1020
console.log(typeof (NumberOne + "" +NumberTwo ) ); // Normal Concatenate => String
console.log(`${NumberOne }${ NumberTwo}`);// Template Literals Way => 1020
console.log(typeof (`${NumberOne} ${NumberTwo}`)); // Template Literals Way => String

console.log(NumberOne + "\n" + "" + NumberTwo);
/*
  Normal Concatenate
  20
  10
*/
console.log(`${NumberOne} ${"\n"}${NumberTwo}`);
console.log("\n")
/*
  Template Literals Way
  20
  10
*/

console.log(mero.innerHTML); // object
console.log(typeof mero);   // object
console.log("\n")

// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``

console.log(" \//`I`m In \n \// \\\\ \n \// Love \\\\ \"\"\" \'\'\' \n \// ++ With ++ \n \// \\\"\"\"\\\"\"\" \n \// \"\"JavaScript\"\"`` ")
console.log("\n")

// _21_2021_2021_2021_20_
let a = 21;
let b = 20;
let c =(b +""+a+"_")

console.log(`_${a}_${c.repeat(3)}${b}_`); 

