function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function Faculty(name, dept) {
  Person.call(this, name);
  this.dept = dept;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getDept = function () {
  return this.dept;
};

function Professor(name, dept, title) {
  Faculty.call(this, name, dept);
  this.title = title;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getTitle = function () {
  return this.title;
};

const p = new Professor("Rao", "Math", "HOD");
console.log(p.getName());
console.log(p.getDept());
console.log(p.getTitle());
