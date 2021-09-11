import React, {useState} from "react";
import "./SignIn.scss";
import FormInput from "../Form-Input/Form-Input";
import CustomButton from "../Custom-Button/Custom-Button";

// import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./SignInStyled";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/actions/userActions";
import {connect} from "react-redux";

// functional component
const SignIn = (props) => {
  const {emailSignInStart, googleSignInStart} = props;
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {email, password} = state;

    // try catch using redux
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setState({
    //     email: "",
    //     password: ""
    //   });
    // } catch (error) {
    //   console.error(error);
    // }

    // using saga
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const {value, name} = e.target;

    setState({...state, [name]: value});
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={state.email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={state.password}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignin
          >
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);
