// for..of for string
let str = "Alicia";
let str_copy = str.split("");
str_copy = str_copy.reverse();
str = str_copy.join("");
let c = str.length - 1;
for (const ch of str) {
  console.log(ch);
}

// Iterable -> built in iterables -> array, string, set and map.
// an object is iterable if in it's class it has a method in its prototype chain that uses the symbol, [Symbol.iterator] as a key.
// Iterator : an object that has next() which returns {value:val/undefined, done:true/false}
let array = [1, 2, 3];
let iterator = array.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Customised iterable
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World!", done: false };
        } else return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};
for (const ch of obj) {
  console.log(ch);
}
