const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let valid = [];
let invalid = [];

for (let item of apiData) {
  let num = Number(item);

  console.log("Original:", item);
  console.log("Number:", num);
  console.log("Boolean:", Boolean(item));
  console.log("String:", String(item));
  console.log("-----------------------");

  if (!isNaN(num) && item !== " " && item !== "100px") valid.push(num);
  else invalid.push(item);
}

console.log("Valid Numbers:", valid);
console.log("Invalid Numbers:", invalid);

