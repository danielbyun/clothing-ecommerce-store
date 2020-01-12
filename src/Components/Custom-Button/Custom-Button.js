import React from "react";
import "./Custom-Button.scss";

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
  /* pull children from props, and spread operator */
  return (
    <button
      className={`${isGoogleSignin ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
