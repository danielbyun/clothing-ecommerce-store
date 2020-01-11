import React from "react";
import "./Custom-Button.scss";

const CustomButton = ({ children, ...otherProps }) => {
  /* pull children from props, and spread operator */
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
