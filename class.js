// Classes in JS are syntactical sugar over prototypical inheritance.

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    console.log(this);
  }
  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

class Employee extends Person {
  constructor(fname, lname, skills1, skills2) {
    super(fname, lname);
    this.skills1 = skills1;
    this.skills2 = skills2;
    console.log(this);
  }
  displaySkill() {
    console.log(this.getFullName());
    console.log(`Skills : ${this.skills1} and ${this.skills2}`);
  }
  getFullName() {
    super.getFullName(); // calls getFullName() in Person class
    console.log("Hello");
  }
}
const emp1 = new Employee("Alice", "Gilmore", "C", "JavaScript");
emp1.displaySkill();
console.log(emp1.getFullName());
