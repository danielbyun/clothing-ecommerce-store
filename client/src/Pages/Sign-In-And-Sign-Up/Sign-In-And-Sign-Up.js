import React from "react";
import "./Sign-In-And-Sign-Up.scss";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import {SignInAndSignUpContainer} from "./Sign-In-And-Sign-Up-Styled";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
