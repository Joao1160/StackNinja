window.onload = function () {
    // Assignment Two
    console.log("<%cElzero", "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial")
    
    // Assignment Three
    console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px", "color: green; font-size: 40px; font-weight: bold", "color: white; background-color: blue; font-size: 40px")
    
    // Assignment Four
// Creating First group
console.group("Group 1"); 

// Printing First statement of Group  
console.log("Message One"); 

// Printing Second statement of Group 
console.log("Message Two");

// Creating nested group in First group  
console.group("Child Group"); 

// Printing 1st line of nested group 
console.log("Message One"); 

// Printing 2nd line of nested group
console.log("Message Two"); 

// Creating second nested group  
console.group("Grand Child Group"); 

// Printing 1st line of second nested group 
console.log("Message One"); 

// Printing 2nd line of second nested group 
console.log("Message Two"); 

// Ending of the first nested group 
console.groupEnd(); 

// Ending of the second nested group 
console.groupEnd();

// Ending of the First group 
console.groupEnd(); 
// Creating Second group
console.group("Group 2")
// Printing 1st line of second group
console.log("Message One");
// Printing 2nd line of second group
console.log("Message Two");  
}

// document.querySelector("h1").style.color = "Blue";
    // // window.alert("Hello Fatom");
    // //document.write("<span><p> First Line </p></span>");  ==> create.element();
    // console.log("Hello From js file");
    // console.log("Log");
    // //console.error("Error");
    // console.table("Fatma", "Malak", "Mohamed");
    // console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px")

