let num1 = Math.floor(Math.random() * 20);
console.log(num1);
let num2 = Math.floor(Math.random() * 20);
console.log(num2);
let operator = Math.floor(Math.random() * 4) + 1; 
console.log("Operator:", operator);

switch(operator){
    case 1: 
    console.log("Addition :",num1 + num2);
    break;

    case 2: 
    console.log("Subtraction :",num1 - num2);
    break;

    case 3: 
    console.log("Multiplication :",num1 * num2);
    break;

    case 4: 
            if (num2 !== 0) {
            console.log("Division:", (num1 / num2).toFixed(2));
        } else {
            console.log("Division by zero not allowed!");
        }
    break;

    default:
        console.log("Invalid Operator");
}

