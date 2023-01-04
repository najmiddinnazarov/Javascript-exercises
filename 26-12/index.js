// No2
// function getCalc(type, ...args) {
//   switch (type) {
//     case "plus":
//       return args.reduce((acc, prev) => acc + prev);
//       break;
//     case "minus":
//       return args.reduce((acc, prev) => acc - prev);
//       break;
//     case "multiply":
//       return args.reduce((acc, prev) => acc * prev);
//       break;
//     case "divide":
//       return args.reduce((acc, prev) => acc / prev);
//       break;
//     default:
//       return "Type is not found!";
//   }
// }
// console.log(getCalc("multiply", 2, 3));

// No1
function* gen() {
  for (const i of object) {
  }
}
const getCalc = (...args) => {
  let arr = [...args];
  return (b) => {
    if (b) {
      console.log(b);
      return getCalc(...args);
    }
    return arr;
  };
};
// console.log(getCalc(1)(2));
console.log(getCalc(2)(3)(4));
console.log(getCalc(2)(3)(5)());
