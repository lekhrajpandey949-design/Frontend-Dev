const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
const valid = [];
const invalid = [];
for (let t of transactions) {
  try {
    if (t === null) throw new Error("NullEntry");
    if (t.id == null || t.amount == null) throw new Error("MissingField");
    if (typeof t.amount !== "number") throw new Error("InvalidAmountType");
    if (t.amount < 0) throw new Error("NegativeAmount");
    valid.push(t);
  } catch (err) {
    invalid.push({ entry: t, error: err.message });
  } finally {
    debugger;
  }
}
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
console.log("Valid:", valid);
console.log("Invalid:", invalid);
