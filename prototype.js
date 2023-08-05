function Person(fname, lname) {
  this.firstName = fname;
  this.lastname = lname;
}
// creates instance of a Person using new keyword.
const person1 = new Person("Jayti", "Srivastava");
const person2 = new Person("Aditi", "S");
person1.getFullName = function () {
  console.log("person 1's property");
  return `${this.firstName} ${this.lastname}`;
};
console.log(person1.getFullName());
//  console.log(person2.getFullName()); TypeError: person2.getFullName is not a function

// Shareable methods and properties across all instances of Person() using prototype, which points to an object.

Person.prototype.getFullName1 = function () {
  return `${this.firstName} ${this.lastname}`;
};
console.log(person1.getFullName1());
console.log(person2.getFullName1());
