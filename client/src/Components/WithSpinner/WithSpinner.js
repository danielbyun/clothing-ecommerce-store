import React from "react";
import Spinner from "../Spinner/Spinner";

// higher order component returns new functional component
const WithSpinner =
  (WrappedComponent) =>
  ({isLoading, ...otherProps}) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;
