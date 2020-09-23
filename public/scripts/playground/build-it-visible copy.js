"use strict";

var visibility = true;
var appRoot = document.getElementById("app");

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  renderApp();
};

var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility Toggle"), /*#__PURE__*/React.createElement("button", {
    id: "showBtn",
    onClick: toggleVisibility,
    hidden: !visibility
  }, "Show details"), /*#__PURE__*/React.createElement("button", {
    id: "hideBtn",
    onClick: toggleVisibility,
    hidden: visibility
  }, "Hide details"), /*#__PURE__*/React.createElement("p", {
    hidden: visibility
  }, "Hey, These are some details you can now see!"));
  ReactDOM.render(template, appRoot);
};

renderApp();