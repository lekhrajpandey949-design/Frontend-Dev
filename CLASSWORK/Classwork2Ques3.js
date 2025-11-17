let str = "45.67";

let num = parseFloat(str);
console.log(num);

console.log(typeof(num));
console.log(typeof(str));

if (isNaN(num)) {
    console.log("Invalid number");
} else {
    console.log("Valid number:", num);
}
