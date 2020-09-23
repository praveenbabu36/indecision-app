"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header = function Header(props) {
  //jsx
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("i", null, props.subTitle)));
};

Header.defaultProps = {
  title: "Default Title",
  subTitle: "Default Subtitle"
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    id: "btnMakeDecision",
    onClick: props.handlePick,
    disabled: !props.hasOptions
  }, "What should i do?"));
};

var Options = function Options(props) {
  var optionsList = props.optionsList;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    id: "btnReset",
    onClick: props.handleReset
  }, "Reset Options"), optionsList.length === 0 && /*#__PURE__*/React.createElement("p", null, "Please add an Option."), /*#__PURE__*/React.createElement("ol", null, optionsList.map(function (option) {
    return /*#__PURE__*/React.createElement(Option, {
      key: option,
      optionText: option,
      handleDeleteOption: props.handleDeleteOption
    });
  })));
};

var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, props.optionText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.handleDeleteOption(props.optionText);
    }
  }, "remove"));
};

var AddOption = /*#__PURE__*/function (_React$Component) {
  _inherits(AddOption, _React$Component);

  var _super = _createSuper(AddOption);

  function AddOption(props) {
    var _this;

    _classCallCheck(this, AddOption);

    _this = _super.call(this, props);
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(AddOption, [{
    key: "addItem",
    value: function addItem(e) {
      e.preventDefault();
      var newItem = e.target.elements.newItemInput.value.trim();
      var error = this.props.handleAdd(newItem);
      this.setState(function () {
        return {
          error: error
        };
      }); //clear the input field if there is no error

      if (!error) {
        e.target.elements.newItemInput.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, "Error:", this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.addItem
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "newItemInput"
      }), /*#__PURE__*/React.createElement("button", {
        id: "btnAdd"
      }, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component); // Top compoent that has all other components inside


var IndecisionApp = /*#__PURE__*/function (_React$Component2) {
  _inherits(IndecisionApp, _React$Component2);

  var _super2 = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this2;

    _classCallCheck(this, IndecisionApp);

    _this2 = _super2.call(this, props);
    _this2.resetOptions = _this2.resetOptions.bind(_assertThisInitialized(_this2));
    _this2.handlePick = _this2.handlePick.bind(_assertThisInitialized(_this2));
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.removeOption = _this2.removeOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      //options: [],
      options: props.options
    };
    return _this2;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        console.log("componentDidMount");
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {
        console.log("Invalid JSON");
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length != this.state.options.length) {
        console.log("saving data");
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnmount");
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      //dont add if the option exists already
      if (!option) {
        return "Enter value";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Value exists";
      }
      /*
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option),
        };
      });
      */


      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      console.log("Select a Option");
      var randomNo = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNo]);
    }
  }, {
    key: "removeOption",
    value: function removeOption(optionToRemove) {
      console.log("Remove option : ", optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "resetOptions",
    value: function resetOptions() {
      console.log("Reset Options");
      this.setState(function () {
        return {
          options: []
        };
      }); // another way to return the new object
      //this.setState(() => ({ options: [] }));
    } //render method

  }, {
    key: "render",
    value: function render() {
      var appTitle = "Indecision";
      var subTitle = "Put your life in the hands of a computer!"; //return

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: appTitle,
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(Action, {
        handlePick: this.handlePick,
        hasOptions: this.state.options.length > 0
      }), /*#__PURE__*/React.createElement(Options, {
        optionsList: this.state.options,
        handleReset: this.resetOptions,
        handleDeleteOption: this.removeOption
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAdd: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ["Default Item"]
}; // Stateless functional component

var User = function User(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Name: ", props.name), /*#__PURE__*/React.createElement("p", null, "Age: ", props.age));
};

var appRoot = document.getElementById("app"); // ReactDOM.render(<User name="Praveen" age="38" />, appRoot);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, {
  options: []
}), appRoot);