const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];
const clean = [];
const errors = [];
for (let i = 0; i < rawData.length; i++) {
  try {
    const obj = JSON.parse(rawData[i]);
    if (!obj.user || obj.age == null) throw new Error("MissingKey");
    obj.age = Number(obj.age);
    if (isNaN(obj.age)) throw new Error("InvalidAge");
    if (obj.age < 18) {
      console.log(`Underage filtered: ${obj.user} ${obj.age}`);
      continue;
    }
    clean.push(obj);
  } catch (err) {
    errors.push({ line: i + 1, raw: rawData[i], error: err.message });
  }
}
console.log("Clean:", clean);
console.log("Errors:", errors);
