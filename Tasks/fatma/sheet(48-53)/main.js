window.onload = function (){
    //Assignment one
    let start1 = 10;
    let end1 = 100;
    let exclude = 40;
    let i;
    for(i = start1; i<=end1; ){
        if(i%10==0){
            if(i === exclude){
                continue;
            }
            console.log(i + "\n");
        }
    }

    // Assignment two
    let start2 = 10;
    let end2 = 0;
    let stop = 3;
    let j ;
    for(j=start2; j>end2; j--){
        if(j<10){
            console.log("0" + j);
        } else {
            console.log(j);
        } if(j == stop){
            break;
        }
    }
    // Assignment three
    let start3 = 1;
    let end3 = 6;
    let breaker = 2;
    let o,u;
    for(o = start3; o < end3; o++){
        console.log(o);
        for(u = breaker; u < end3; u += breaker){
            console.log("--" + u);
        }
    }

    // Assignment four
    let index = 10;
    let jump = 2;
    let end4 = 0;
    let k
    for(k = index; k > end4; k -= jump){
        console.log(k);
        if(k == jump + jump){
            break;
        }
    }

    // Assignment five 
    let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
    let letter = "a";
    let f, num = 1;
    for(f = letter.length - letter.length; f < friends.length; f++){
        if(friends[f].startsWith(letter.toUpperCase())){
            continue;
        }
        console.log(num + "=>" + friends[f]);
        num++;
    }

    // Assignment six
    let start4 = 0;
    let swappedName = "elZero";
    let out = "";
    let s;
    for(s = start4; s < swappedName.length; s++){
        if(swappedName[s] === swappedName[s].toLowerCase()){
            out += swappedName[s].toUpperCase();
        } else if (swappedName[s] === swappedName[s].toUpperCase()){
            out += swappedName[s].toLowerCase();
        }
        console.log(out);
    }

    // Assignment seven
    let start5 = 0;
    let max = [1, 2, 3, "A", "B", "C", 4];
    let x;
    for(x = start5 + max.indexOf ; x < mix.length; x++){
        if(typeof mix[x] === "string"){
            continue;
        }
        console.log(mix[x]);
    }
}