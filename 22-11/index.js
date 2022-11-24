// Hello, object
// const user = {
//   name: "John",
//   surname: "Smith",
// };
// user.name = "Pete";
// delete user.name;

// ============ =========================== //

// Check for emptiness

// let schedule = {};
// const isEmpty = (obj) => {
//   if (obj["8:30"] === undefined) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEmpty(schedule));
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));

// ============ =========================== //

// Sum object properties

// let result = 0;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// for (const key in salaries) {
//   result += salaries[key];
// }
// console.log(result);

// ============ =========================== //

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const objSort = (obj) => {
//   let objEntries = Object.entries(obj);
//   let arrSort = objEntries.sort((a, b) => b[1] - a[1]);
//   let newObj = Object.fromEntries(arrSort);
//   return newObj;
// };
// console.log(objSort(salaries));

// ============ =========================== //

// Multiply numeric property values by 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// const multiplyNumeric = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
//   return obj;
// };

// console.log(multiplyNumeric(menu));

// ============ =========================== //
