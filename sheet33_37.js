// Test Case 1
let num = 9; // "009"
if(num < 10)
console.log("00" + num);

// Test Case 2
let num2 = 20; // "020"
if(num2 > 10 && num2 < 100)
console.log("0" + num2);

// Test Case 3
let num3 = 110; // "110"
if(num3 > 100)
console.log(num3);

console.log("=========================");

let num1 = 9;
let str = "9";
let str2 = "20";

if(num1 == str)
console.log("{num1} Is The Same Value As {str}");

if(num1 !== str)
console.log("{num1} Is The Same Value As {str} But Not The Same Type");

if(num1 !== str2)
console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");

if(str != str2)
console.log("{str} Is The Same Type As {str2} But Not The Same Value");

console.log("=======================");

let num4 = 10;
let num5 = 30;                  
let num6 = "30";

if((num6 > num4) && (num6 !== num5) && (num6 > num4) && 
(num6 == num5) && (num6 !== num5) && 
(num6 !== num4) && (num6 !== num5))
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number"+"\n"+
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"+"\n"+
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

console.log("=======================");

// Edit What You Want Here

let numm1 = 10; //10
let numm2 = 5;
let numm3 = 10; //"10"
let numm4 = 36;

// Condition 1

if (numm1 > numm2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (numm1 > numm2 && numm1 < numm4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (numm1 > numm2 && numm1 === numm3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((numm1 + numm2) < numm4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((numm1 + numm3) < numm4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((numm1 + numm2 + numm3) < numm4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (numm4 - (numm1 + numm3) + numm2 === 21) {
    console.log("True");
} else {
    console.log("False");
}

