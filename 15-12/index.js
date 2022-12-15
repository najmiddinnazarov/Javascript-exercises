// No1
// let sum = 0;
// function sumTo(num) {
//   if (num === 1) {
//     return sum++;
//   } else {
//     sum += num;
//     return sumTo(num - 1);
//   }
// }
// sumTo(2);
// console.log(sum);

// No2
// let sum = 1;
// function sumTo(num) {
//   if (num === 1) {
//     return (sum = sum * 1);
//   } else {
//     sum *= num;
//     return sumTo(num - 1);
//   }
// }
// sumTo(4);
// console.log(sum);

// No3
// function getFibonacci(num) {
//   if (num < 2) {
//     return num;
//   }
//   return getFibonacci(num - 1) + getFibonacci(num - 2);
// }

// console.log(getFibonacci(3));

// Examples
// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//   },
// };

// function getCalc(company) {
//   if (Array.isArray(company)) {
//     return company.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (const i of Object.values(company)) {
//       sum += getCalc(i);
//     }
//     return sum;
//   }
// }
// console.log(getCalc(company));
