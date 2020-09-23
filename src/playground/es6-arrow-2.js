//es5 - arguments - object returns the arguments
//           passed to the function
/*
function add(a, b) {
  console.log(arguments);
  return a + b;
}*/

// es6
/*
const add = (a, b) => {
  console.log(arguments); // wont work
  return a + b;
};

add(100, 25);
*/

// this keyword -
//es5
/*
const user = {
  name: "Praveen",
  cities: ["Chennai", "Kolkatta", "Bangalore"],

  printDetails() {
    return this.cities.map((city) => this.name + " lived in " + city + "!");
  },
};

console.log(user.printDetails());*/

// Challenge

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  mutiplyBy: 5,
  mutiplyRes() {
    return this.numbers.map((number) => number * this.mutiplyBy);
  },
};

console.log(multiplier.mutiplyRes());
