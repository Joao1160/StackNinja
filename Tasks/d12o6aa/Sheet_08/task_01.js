let day = " friday ";
day = day.trim();
let day1 = day.charAt(0).toUpperCase() + day.slice(1,day.length+1);
console.log(day1);
switch (day1){
    case "Friday" || "Saturday" || "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday" || "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}
