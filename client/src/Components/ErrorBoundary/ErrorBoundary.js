import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./ErrorBoundaryStyled";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // is there any error that occurred in the state
      hasErrored: false
    };
  }

  // lifecycles required for ErrorBoundaries
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  // gives us the access to both the error and info related to the error
  componentDidCatch(error, info) {
    // log it here, and perform something
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/3suxlvm.png" />
          <ErrorImageText>Oh no we tripped up!!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
