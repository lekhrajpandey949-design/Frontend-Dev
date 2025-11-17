username = "Chandra Shekhar";
let currentHour = Math.floor(Math.random() * 24);
if(currentHour < 12){
    console.log("Good morning, " + username + "!");
} else if(12 <= currentHour && currentHour < 17){
    console.log("Good afternoon, " + username + "!");
} else{
    console.log("Good evening, " + username + "!");
}