class InvalidOperationError extends Error {}
class MathError extends Error {}
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
function run(op) {
  try {
    let result;
    switch(op) {
      case "add": result = num1 + num2; break;
      case "subtract": result = num1 - num2; break;
      case "divide":
        if (num2 === 0) throw new MathError("DivideByZero");
        result = num1 / num2;
        break;
      case "power": result = Math.pow(num1, num2); break;
      case "root":
        if (num1 < 0) throw new MathError("RootOfNegative");
        result = Math.pow(num1, 1/num2);
        break;
      default: throw new InvalidOperationError("UnknownOperation");
    }
    console.log(`op=${op} result=${result}`);
  } catch (err) {
    console.log(`op=${op} error=${err.message}`);
  }
}
for (let o of operations) run(o);
run("unknown");
