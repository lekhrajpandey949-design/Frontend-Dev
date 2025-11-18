class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent / 100);
    }
}

const employees = [
    new Employee(1, "John", "IT", 30000),
    new Employee(2, "Rita", "HR", 25000),
    new Employee(3, "Aman", "Finance", 28000),
    new Employee(4, "Neha", "IT", 35000),
    new Employee(5, "Sam", "Sales", 22000),
];

employees.forEach(emp => emp.applyBonus(10));

const total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", total);
