let x = 16.75;
let rounded = Math.round(x);
let squareroot = Math.sqrt(x);
let power = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10;

console.log(`Math Dashboard:\
    Rounded: ${ rounded }
    Square Root: ${ squareroot }
    Power(x ^ 3): ${ power }
    Random(10 - 50): ${ random }`);