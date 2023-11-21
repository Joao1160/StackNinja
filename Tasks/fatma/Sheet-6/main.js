window.onload = function (){
    //Assignment one
    let myFriends1 = ["Ahmed", "Elham", "Osama", "Gamal"];
    let num = 3;
    
    // Method 1
    myFriends1.pop();
    console.log(myFriends1); // ["Ahmed", "Elham", "Osama"];
    
    // Method 2
    myFriends1.length = 3;
    console.log(myFriends1); // ["Ahmed", "Elham", "Osama"];

    //Assignment two
    let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
    // Write Your Code Here
    friends.pop();
    friends.shift();
    
    console.log(friends); // ["Eman", "Osama"]

    //Assignment three
    let arrOne = ["C", "D", "X"];
    let arrTwo = ["A", "B", "Z"];


    // Write One Single Line Of Code
    let finalArr = arrOne.concat(arrTwo).sort().reverse();

    console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

    //Assignment four
    let website = "Go";
    let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

    console.log(words[2][0].slice(2)); // ZERO

    //Assignment five
    let needle = "JS";
    let haystack = ["PHP", "JS", "Python"];

    // Write 3 Solutions
        //one
        if(haystack.includes(needle)){
            console.log("Found");
        }
        //two
        if(haystack[1] == needle){
            console.log("Found");
        }
        if(haystack.indexOf(needle)){
            console.log("Found");
        }

    //Assignment six
    let arr1 = ["A", "C", "X"];
    let arr2 = ["D", "E", "F", "Y"];
    let allArrs = [];

// Your Code Here
arr1.shift();
arr1.shift();
arr2.shift();
arr2.shift();
allArrs = arr2.concat(arr1).sort();

console.log(allArrs); // fxy

}