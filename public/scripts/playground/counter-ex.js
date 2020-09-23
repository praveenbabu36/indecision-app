"use strict";

var count = 0;

var increment = function increment() {
  count++;
  renderCounterApp();
};

var decrement = function decrement() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    id: "btn1",
    onClick: increment
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btn2",
    onClick: decrement
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    id: "btn3",
    onClick: reset
  }, "Reset"));
  ReactDOM.render(template3, appRoot);
};

renderCounterApp();