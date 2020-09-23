// // es5 function
// //function square(n) {          // named es5 function
// const square = function (n) {
//   // anonymous es5 function
//   return n * n;
// };

// console.log("square of 5:", square(5));

// //es6 arrow
// // const squareArrow = (x) => {
// //   // es6 functions are always anonymous
// //   return x * x;
// // };

// //es6 arrow function expressions
// const squareArrow = (x) => x * x;

// console.log("square arrow of 8:", squareArrow(8));

/*
const fullName = "Praveen Babu";

const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName(fullName));
*/

const calcPercent = (number, percent) => number * (percent / 100);

console.log(calcPercent(1000, 2.5));
