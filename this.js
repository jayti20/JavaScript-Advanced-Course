// this -> special keyword that refers to an object. The value of this keyword depends on the way a function is invoked.

// Implicit binding

const user = {
  name: "Alice",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
  actions: {
    greet: function () {
      console.log(`Welcome, ${this.name}`);
    },
  },
};
user.sayMyName();
user.actions.greet(); // this refers to the action obj, so undefined
const sayMyNameFunc = user.sayMyName; // the implicit binding is lost in new func reference
sayMyNameFunc();

// Explicit Binding -> specify the object to which this should point to

const user1 = {
  name: "Bob",
  age: 30,
  greet: function (lname) {
    console.log(
      `Hi, I am ${this.name} ${lname} and I am ${this.age} years old.`
    );
    console.log(this);
  },
};
const user2 = {
  name: "Peter",
  age: 24,
};
user1.greet.call(user2, "Parker");
user1.greet.apply(user2, ["Parker"]);
const user_func = user1.greet.bind(user2, "Parker");
console.log(user_func);
user_func();

// New binding -> whenever a func is invoked with new keyword, it creates an empty object that 'this' references to.

const Person = function (name) {
  //this.name
  this.name = name;
  console.log(this);
};
const p1 = new Person("Jayti");
const p2 = new Person("Bruce");
console.log(p1.name, p2.name);

// Default Binding -> fallback binding that applies when all the other rules do not apply.
globalThis.name = "Superman";
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName();
