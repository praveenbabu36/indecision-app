import React from "react";

const Option = (props) => (
  <div className="option">
      <p className="option__element">{props.count}.{props.optionText}</p>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        className="s-button s-button--link"
        >
        Remove
      </button>
  </div>
);

export default Option;
