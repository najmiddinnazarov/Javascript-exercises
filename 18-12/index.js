// No1
// const person = {
//   name: "John",
//   surName: "Doe",
//   age: 34,
//   developer: true,
// };
// Object.prototype.remove = function (key) {
//   return delete this[key];
// };
// person.remove("age");
// console.log(person);

// No2
// Object.prototype.set = function (descriptor, value, boolean) {
//   return Object.defineProperty(this, value, {
//     [descriptor]: boolean,
//   });
// };
// person.set("enumerable", "age", true);
// console.log(Object.getOwnPropertyDescriptor(person, "age"));
