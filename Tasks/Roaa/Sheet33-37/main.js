let num = 9;
if(num < 10){
  console.log("00" + num);
} else if(num > 10 && num < 100){
  console.log(`0${num}`);
}
else{
  console.log(num);
}


let num11 = 9;
let str = "9";
let str2 = "20";

if(num11 == str){
  if(num11 === str){
    console.log("{num1} Is The Same Value As {str}");
  }
  else {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
  }
}

if(str != str2 && typeof str == typeof str2){
  console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}

if(num11 != str2 && typeof num11 != typeof str2){
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"




let numOne = 10;
let numTwo = 30;
let numThree = "30";

if(numThree > numOne && typeof numThree != typeof numOne){
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
} else if(numThree > numOne && numThree == numTwo && typeof numThree != typeof numTwo){
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
} else if(numThree != numOne && typeof numThree != typeof numTwo){
  console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"




// Edit What You Want Here

let num1 = 15;
let num2 = 1;
let num3 = 15;
let num4 = 50;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
