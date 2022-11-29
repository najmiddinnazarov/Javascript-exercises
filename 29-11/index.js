// Numbers

// const check = (str1, str2) => {
//   if (str1 === str2) return "Ma'lumotlar bir-biriga mos keladi!";
//   else if (str1.includes(str2) || str2.includes(str1))
//     return "Qisman to`g`ri keladi";
//   else return "Umuman to`g`ri kelmaydi";
// };
// console.log(check("Webbrain academy", "Webbrain academy"));

// const result = Math.max(1, 3, 4, 5, 6) - Math.min(1, 3, 4, 5, 6);
// console.log(result);

// const randomInteger = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };
// console.log(randomInteger(1, 50));

// Strings

// let str = "web sad web sad academy web";

// for (const i of str) {
//   if (str.includes(i)) {
//     str = str.replace("web", "WEB");
//   }
// }
// console.log(str);

// const check = (str1, str2) => {
//   let result = "";
//   // for (const i of str1) {
//   //   for (const j of str2) {
//   //     if (i == j) {
//   //       result += j;
//   //     }
//   //   }
//   // }
//   result = str1.includes(str2);
//   return result;
// };
// console.log(check("webbrain academy", "web")); // Error

// const getCount = (str) => {
//   const obj = {};
//   for (const i of str) {
//     !obj[i] ? (obj[i] = 1) : obj[i]++;
//   }
//   return obj;
// };
// console.log(getCount("Webbrain"));

// const truncate = (str, n) => {
//   return str.slice(0, n);
// };
// console.log(truncate("webbrain academy", 5));

// const getCurrency = (str) => {
//   let result = "";
//   for (let i of str) {
//     i = Number(i);
//     if (!isNaN(i)) {
//       result += i;
//     }
//   }
//   return Number(result);
// };
// console.log(getCurrency("$123"));

// const getCount2 = (str) => {
//   const obj = {};
//   for (const i of str) {
//     !obj[i] ? (obj[i] = 1) : obj[i]++;
//   }
//   return obj;
// };
// console.log(getCount2("Webbrain"));
