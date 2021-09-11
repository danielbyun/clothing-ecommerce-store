import React from "react";
import {SpinnerContainer, SpinnerOverlay} from "./WithSpinnerStyled";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
