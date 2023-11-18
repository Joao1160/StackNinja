window.onload = function () {
    // Assignment one
    // Test Case 1
    let num = 28; // "009"
    
    if(num<10){
        console.log("00"+num);
    }
    // Test Case 2
    else if(num>10 && num<100){
        console.log("0"+num);
    }
    // Test Case 3
    else{
        console.log(num);
    }
    
    // Assignment two
    let num1 = 9;
    let str = "9";
    let str2 = "20";
    if(num1 == str){
        console.log("${num1}Is The Same Value As {str}");
    }
    if(num !== str){
        console.log("{num1} Is The Same Value As {str} But Not The Same Type");
    }
    if(num !== str2){
        console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
    }
    if(str != str2){
        console.log("{str} Is The Same Type As {str2} But Not The Same Value");
    }

    // Assignment three
    let num12 = 9;
    let str23 = "9";
    let str22 = "20";
    if(((str22 > num12) && (str22 !== str23))){
        if(((str22 != num12) && (str22 !== str23))){
            if (((str22 > num12) && (str22 !== str23))){
                console.log("30 Is Larger Than 10 And Type string Not The Same Type As number\n" +
             "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number\n"+
             "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}\n");
            }
        }
    }

    // Assignment four
    let num1a = 10;
    let num2 = 3;
    let num3 = 10;
    let num4 = 38;
    // Condition 1

if (num1a > num2) {
    console.log("True");
  } else {
    console.log("False");
  }
  
  // Condition 2
  
  if (num1a > num2 && num1a < num4) {
    console.log("True");
  } else {
    console.log("False");
  }
  
  // Condition 3
  
  if (num1a > num2 && num1a === num3) {
    console.log("True");
  } else {
    console.log("False");
  }
  
  // Condition 4
  
  if ((num1a + num2) < num4) {
    console.log("True");
  } else {
    console.log("False");
  }
  
  // Condition 5
  
  if ((num1a + num3) < num4) {
    console.log("True");
  } else {
    console.log("False");
  }
  
  // Condition 6
  
  if ((num1a + num2 + num3) < num4) {
    console.log("True");
  } else {
    console.log("False");
  }
  
  // Condition 7
  
  if (num4 - (num1a + num3) + num2 === 21) {
    console.log("True");
  } else {
    console.log("False");
  }

}