import React from "react";
import Option from "./Option";

const Options = (props) => {
  const optionsList = props.optionsList;
  return (
    <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button id="btnReset" onClick={props.handleReset} className="s-button s-button--link">
        Reset Options
      </button>
    </div>
    <div className="widget-message">
      {optionsList.length === 0 && <p>Please add an Option to get started.</p>}
    </div>
      
    <div>
      <ol>
        {optionsList.map((option, index) => (
          <Option
            key={option}
            optionText={option} 
            count={index+1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>

    </div>
  );
};

export default Options;
