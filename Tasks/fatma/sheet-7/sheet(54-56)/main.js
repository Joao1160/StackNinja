window.onload = function (){
    //Assignment one
    let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
    let index = 0;
    let counter = 0;

    while(index < friends.length){
        if(typeof friends[index].startsWith('A' || typeof friends[index] === "number")){
            index++;
            continue;
        }
        console.log(++counter + "=>" + friends[index]);
        index++;
    }
}