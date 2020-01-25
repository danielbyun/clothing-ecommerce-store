import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../Form-Input/Form-Input";
import CustomButton from "../Custom-Button/Custom-Button";

import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./SignInStyled";

// functional component
const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setState({ ...state, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={state.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={state.password}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignin>
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
