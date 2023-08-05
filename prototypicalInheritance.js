function Person(fname, lname) {
  this.firstName = fname;
  this.lastname = lname;
}
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastname}`;
};
function Employee(skill1, skill2, fname, lname) {
  this.isCurrentEmployee = true;
  this.skill1 = skill1;
  this.skill2 = skill2;
  Person.call(this, fname, lname);
  console.log(this);
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.fetch_skills = function () {
  console.log(
    `${this.firstName} ${this.lastname} is skilled at ${this.skill1} && ${this.skill2}.`
  );
};
const emp1 = new Employee("C", "Java", "Jayti", "Srivastava");
emp1.fetch_skills();
console.log(emp1.getFullName());

Employee.prototype.constructor = Employee;
