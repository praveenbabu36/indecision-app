import React, { Children } from "react";
import ReactDOM, { render } from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

var appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp options={[]} />, appRoot);
