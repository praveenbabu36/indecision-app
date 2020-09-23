//console.log("util.js is running !!");
const square = (a) => {
  return a * a;
};

const add = (a, b) => {
  return a + b;
};

export default (a, b) => {
  return a - b;
};

// references to features available in util.js
// named exports
export { square, add };
