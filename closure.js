// Closure -> function + lexical environment.
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();
outer();

// Invoking the inner function at a later pointer, not when outer is invoked, so return the function
var x = 5;
function outer1() {
  let counter = 0;
  function inner1() {
    counter++;
    x++;
    console.log(counter, x);
  }
  return inner1;
}
const fn_counter = outer1();
fn_counter();
fn_counter();
