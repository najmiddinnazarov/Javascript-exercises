// No1
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name); // Childdagi name parametrini parentga yuborish uchun super metodidan foydalanamiz!
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit.name);

// No2
// class Rabbit extends Object {
//   constructor(name) {
//     super(); // Agar chiqqan errorni o'qiydigan bo'lsak bizga javobni aytib qo'yibdi. Ya'ni constructore ichiga super metodini yozishimiz kerakligini!
//     this.name = name;
//   }
// }
// let rabbit = new Rabbit("Rab");
// console.log(rabbit.hasOwnProperty("name"));
