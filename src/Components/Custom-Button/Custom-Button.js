import React from "react";
import "./Custom-Button.scss";
import { CustomButtonContainer } from "./Custom-Button-Styled";

const CustomButton = ({ children, ...props }) => {
  /* pull children from props, and spread operator */
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
