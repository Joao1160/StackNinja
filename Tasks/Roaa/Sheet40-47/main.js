let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];




let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]




let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr =   arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]




let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

let element = words.pop()[0];

console.log(element.slice(element.indexOf("z")).toUpperCase()); // ZERO



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(needle == haystack[0]){
  console.log("Found");
} else if(needle == haystack[1]){
  console.log("Found");
} else if(needle == haystack[2]){
  console.log("Found");
} else{
  console.log("Not Found");
}

if(haystack.indexOf("JS") == -1){
  console.log("Not Found");
}else{
  console.log("Found");
}

(haystack.includes("JS")) ? console.log("Found") : console.log("Not Found");





let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().join("").toLowerCase();
allArrs = allArrs.slice(allArrs.indexOf("f"));

console.log(allArrs); // fxy