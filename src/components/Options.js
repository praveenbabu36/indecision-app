import React from "react";
import Option from "./Option";

const Options = (props) => {
  const optionsList = props.optionsList;
  return (
    <div>
      <button id="btnReset" onClick={props.handleReset}>
        Reset Options
      </button>
      {optionsList.length === 0 && <p>Please add an Option.</p>}

      <ol>
        {optionsList.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;
