import React, { useState } from "react";

import FormInput from "../Form-Input/Form-Input";
import CustomButton from "../Custom-Button/Custom-Button";

// import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";

import "./SignUp.scss";
import { SignUpContainer, SignUpTitle } from "./SignUpStyled";
import { signUpStart } from "../../redux/actions/userActions";
import { connect } from "react-redux";

const SignUp = props => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { signUpStart } = props;

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = currentUser;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //   setCurrentUser({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });
    // } catch (error) {
    //   console.error(error);
    // }

    signUpStart(displayName, email, password, confirmPassword);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value
    });
  };

  const { displayName, email, password, confirmPassword } = currentUser;
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sing Up with your email and password.</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password, confirmPassword) =>
    dispatch(signUpStart({ displayName, email, password, confirmPassword }))
});

export default connect(null, mapDispatchToProps)(SignUp);
