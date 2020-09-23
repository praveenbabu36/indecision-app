"use strict";

var app = {
  title: "Indecision Application",
  subTitle: "an app to decide",
  options: [],
  optionSelected: ""
};

var addItem = function addItem(e) {
  e.preventDefault();
  var newItem = e.target.elements.newItemInput.value; // add new item to the options

  app.options.push(newItem);
  renderApp();
};

var resetOptions = function resetOptions() {
  app.options = [];
  renderApp();
};

var makeDecision = function makeDecision() {
  var randomNo = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNo];
  app.optionSelected = option;
  renderApp();
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "p1"
  }, app.title), app.subTitle && /*#__PURE__*/React.createElement("p", null, app.subTitle), /*#__PURE__*/React.createElement("button", {
    id: "btnMakeDecision",
    onClick: makeDecision,
    disabled: app.options.length == 0
  }, "What should i do ?"), /*#__PURE__*/React.createElement("button", {
    id: "btnReset",
    onClick: resetOptions
  }, "Reset Options"), /*#__PURE__*/React.createElement("p", null, "Selected Option:", app.optionSelected), /*#__PURE__*/React.createElement("p", null, app.options && app.options.length > 0 ? "Here are your options" : "No Options", " ", ":", " "), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: addItem
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "newItemInput"
  }), /*#__PURE__*/React.createElement("button", {
    id: "btnAdd"
  }, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderApp();
/*
  var user = {
    name: "Praveen",
    age: 38,
    location: "chennai",
  };
  
  function getLocation(location) {
    if (location) {
      return <p>Location:{location}</p>;
    } else {
      return undefined;
    }
  }
  
  var template2 = (
    <div>
      <h1>{user.name ? user.name : "Anonymous"}</h1>
      {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  );*/
// ReactDOM.render(template2, appRoot);