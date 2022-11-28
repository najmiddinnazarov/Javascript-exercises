// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // What's the result?
// ref ga tegishli this bu window qaytarayapdi va windowni ichidan name ni value si yo'q bo'lganligi uchun undefined qaytarayapdi.

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = 10;
//     this.b = 11;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     console.log(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// const obj = {};
// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }

// let a = new A();
// let b = new B();

// console.log(a == b); // true
