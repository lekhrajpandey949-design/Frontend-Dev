function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(this.name);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log(this.branch);
};

const s = new Student("Amit", "CS");
s.printName();
s.printBranch();
