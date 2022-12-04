// No1
// let arr = [1, 2, 3, 4, 5, 6, 9];
// let newArr = eval(arr.join("+"));
// console.log(newArr);

// No2
// let arr = ["webbrain", "academy"];
// let str = arr.join("");
// const obj = {};
// for (const i of str) {
//   !obj[i] ? (obj[i] = 1) : obj[i]++;
// }
// console.log(obj);

// No3
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// let arr3 = new Array(1, 2, 3);
// console.log(arr1 == arr3); // False

// No4
// const camelize = (str) => {
//   let arr = str.split("");
//   for (const i of arr) {
//     if (i == "-") {
//       let index = arr.indexOf("-");
//       arr.splice(index, 2, arr[index + 1].toUpperCase());
//     }
//   }
//   return arr.join("");
// };
// console.log(camelize("-webkit-transition"));

// No5
// let users = [
//   { id: 1, year: 1998, engine: 1, name: "Tico" },
//   { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, year: 2012, engine: 2, name: "Malibu" },
//   { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];

// Mashinalar ro'yhati chiqarilgan yiliga qarab
// for (const i of users) {
//   for (const key in i) {
//     if (key == "year") {
//       if (i[key] > 2010 /* 2000 */) {
//         console.log(i);
//       }
//     }
//   }
// }

// Mashinalar statusi
// for (const i of users) {
//   for (const key in i) {
//     if (key == "year") {
//       if (i[key] <= 2000) {
//         i["status"] = "eski";
//       } else if (i[key] > 2000 && i[key] <= 2010) {
//         i["status"] = "o'rta";
//       } else if (i[key] > 2010 && i[key] <= 2022) {
//         i["status"] = "yangi";
//       }
//     }
//   }
// }
// console.log(users);

// Object value larini tartiblash
// users.sort((a, b) => a.engine - b.engine);
// console.log(users);

// users.sort((a, b) => a.year - b.year);
// console.log(users);

// users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(users);

// No6
// let str1 = "webbrainAcademy";
// let str2 = "brainAcademyweb";
// let arr1 = str1.toLowerCase().split("").sort().join("");
// let arr2 = str2.toLowerCase().split("").sort().join("");
// let check = arr1 == arr2 && arr2 == arr1;
// console.log(check);
