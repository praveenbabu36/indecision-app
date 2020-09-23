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

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    //render method
    value: function render() {
      var headerProps = this.props; //jsx

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, headerProps.title), /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("i", null, headerProps.subTitle)));
    }
  }]);

  return Header;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);

  var _super2 = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super2.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        id: "btnMakeDecision",
        onClick: this.props.handlePick,
        disabled: !this.props.hasOptions
      }, "What should i do?"));
    }
  }]);

  return Action;
}(React.Component);

var Options = /*#__PURE__*/function (_React$Component3) {
  _inherits(Options, _React$Component3);

  var _super3 = _createSuper(Options);

  function Options() {
    _classCallCheck(this, Options);

    return _super3.apply(this, arguments);
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var optionsList = this.props.optionsList;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        id: "btnReset",
        onClick: this.props.handleReset
      }, "Reset Options"), /*#__PURE__*/React.createElement("ol", null, optionsList.map(function (option) {
        return /*#__PURE__*/React.createElement(Option, {
          key: option,
          optionText: option
        }, option);
      })));
    }
  }]);

  return Options;
}(React.Component);

var Option = /*#__PURE__*/function (_React$Component4) {
  _inherits(Option, _React$Component4);

  var _super4 = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super4.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.optionText);
    }
  }]);

  return Option;
}(React.Component);

var AddOption = /*#__PURE__*/function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  var _super5 = _createSuper(AddOption);

  function AddOption(props) {
    var _this;

    _classCallCheck(this, AddOption);

    _this = _super5.call(this, props);
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
      var newItem = e.target.elements.newItemInput.value;
      var error = this.props.handleAdd(newItem);
      this.setState(function () {
        return {
          error: error
        };
      });
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


var IndecisionApp = /*#__PURE__*/function (_React$Component6) {
  _inherits(IndecisionApp, _React$Component6);

  var _super6 = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this2;

    _classCallCheck(this, IndecisionApp);

    _this2 = _super6.call(this, props);
    _this2.resetOptions = _this2.resetOptions.bind(_assertThisInitialized(_this2));
    _this2.handlePick = _this2.handlePick.bind(_assertThisInitialized(_this2));
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      options: []
    };
    return _this2;
  }

  _createClass(IndecisionApp, [{
    key: "handleAddOption",
    value: function handleAddOption(option) {
      //dont add if the option exists already
      if (!option) {
        return "Enter value";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Value exists";
      }

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
    key: "resetOptions",
    value: function resetOptions() {
      console.log("Reset Options");
      this.setState(function () {
        return {
          options: []
        };
      });
    } //render method

  }, {
    key: "render",
    value: function render() {
      var appTitle = "Indecision - Praveen";
      var subTitle = "Put your life in the hands of a computer!"; //return

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: appTitle,
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(Action, {
        handlePick: this.handlePick,
        hasOptions: this.state.options.length > 0
      }), /*#__PURE__*/React.createElement(Options, {
        optionsList: this.state.options,
        handleReset: this.resetOptions
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAdd: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var appRoot = document.getElementById("app");
ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), appRoot);