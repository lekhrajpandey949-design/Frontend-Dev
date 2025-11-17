"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];
for (let e of employees) {
  try {
    if (!e || !e.name || e.salary == null || e.years == null) throw new Error("Missing property");
    const salary = Number(e.salary);
    const years = Number(e.years);
    if (isNaN(salary) || isNaN(years)) throw new Error("Invalid number");
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`${e.name} | salary: ${salary} | years: ${years} | bonus: ${bonus}`);
  } catch (err) {
    console.log(`Error for entry ${JSON.stringify(e)} -> ${err.message}`);
  }
}
