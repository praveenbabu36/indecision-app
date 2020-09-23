import React from "react";

const Header = (props) => {
  //jsx
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>
        <i>{props.subTitle}</i>
      </h4>
    </div>
  );
};

Header.defaultProps = {
  title: "Default Title",
  subTitle: "Default Subtitle",
};

export default Header;
