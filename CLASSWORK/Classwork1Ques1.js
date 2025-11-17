let daynumber = Math.floor(Math.random()*7);
let dayname;

switch(daynumber){
    case 1:
        dayname = "Monday"
        break;
    case 2:
        dayname = "Tuesday"
        break;
    case 3:
        dayname = "Wednesday"
        break;
    case 4:
        dayname = "Thrusday"
        break;
    case 5:
        dayname = "Friday"
        break;
    case 6:
        dayname = "Saturday"
        break;
    case 7:
        dayname = "Sunday"
        break;

        default:
            dayname = "Invalid day number";
}

console.log(`Today is ${dayname}`);