import React from "react";

const Header = (props) => (
  //jsx
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">
        <i>{props.subTitle}</i>
      </h2>
    </div>
    
</div>
);

Header.defaultProps = {
  title: "Default Title",
  subTitle: "Default Subtitle",
};

export default Header;
