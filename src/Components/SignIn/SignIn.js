import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../Form-Input/Form-Input";
import CustomButton from "../Custom-Button/Custom-Button";

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    setSignIn({
      email: "",
      password: ""
    });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setSignIn({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I alreaady have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={signIn.email}
          required
          type="email"
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          name="password"
          value={signIn.password}
          handleChange={handleChange}
          type="password"
          required
          label="password"
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
