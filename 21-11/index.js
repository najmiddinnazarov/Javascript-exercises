// ================= //

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// ================= //

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   return confirm("Did parents allow you?");
// }
// console.log(checkAge(20));

// ================= //

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }
// console.log(checkAge(15));

// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }
// console.log(checkAge(20));

// ================= //

// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// ================= //

// function pow(x, n) {
//   return x ** n;
// }
// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

// ================= //

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// let ask = (question, yes, no) => (confirm(question) ? yes() : no());
// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );
