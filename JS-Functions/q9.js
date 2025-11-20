class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  printBranch() {
    console.log(this.branch);
  }
}

const s1 = new Student("Kiran", "IT");
s1.printName();
s1.printBranch();
