let num = Math.floor(Math.random() *50) + 1;
console.log(num);
let guess = 35;

if(num === guess){
    console.log("Correct guess!");
}
else {
    if(guess >= num-3 && guess <= num+3){
        console.log("Very Close!");
    }
    else{
        if(guess > num){
            console.log("Too high!");
        }
        else{
            console.log("Too low");
        }
    }
}