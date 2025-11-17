let expenses = [3000, 1200, 8000, 1500, 1000]; 
let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
let finalAmount = total;
finalAmount += finalAmount * 0.10; 
console.log("Total Expense: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Final Amount after 10% Tax: ₹" + finalAmount.toFixed(2));