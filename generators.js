function* generator() {
  yield "Hello";
  yield "World!";
}
const generatorObject = generator();
for (const char of generatorObject) console.log(char);
