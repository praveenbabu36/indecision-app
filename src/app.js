import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

var appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp options={[]} />, appRoot);

//old syntax ---
class OldSyntax {
  constructor() {
    this.name = "Praveen";
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi, Welcome ${this.name} !!!`;
  }
}

const oldSyntax = new OldSyntax();
const getGreetingRef = oldSyntax.getGreeting;
console.log(getGreetingRef());

// new syntax --- after the transform plugin
class NewSyntax {
  name = "babu";

  getGreeting = () => {
    return `Hi, Welcome ${this.name} !!`;
  };
}

const newSyntax = new NewSyntax();
const getNewGreetingRef = newSyntax.getGreeting;
console.log(getNewGreetingRef());
