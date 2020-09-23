//import "./utils.js";

// import anyName, { add, square } from "./utils.js";
// import isSenior, { isAdult, canDrink } from "./person.js";

// console.log("app.js is running! Hello World@");
// console.log(square(9));
// console.log(add(120, 25));
// console.log(anyName(120, 100));

// console.log(isAdult(18));
// console.log(canDrink(20));
// console.log(isSenior(50));

// webpack is going to look for validator module
// import validator from "validator";

// console.log(validator.isEmail("praveen@babu.com"));

//import react & react-dom

import React from "react";
import ReactDOM from "react-dom";

const template = (
  <p>
    {" "}
    Hello World <i>from jsx</i>
  </p>
);
//const template = React.createElement("p", {}, "Hello World !!!");

ReactDOM.render(template, document.getElementById("app"));
