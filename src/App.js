import React, { Fragment, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/actions/userActions";

const App = props => {
  const [userAuth, setUserAuth] = useState({
    currentUser: null
  });

  useDeepCompareEffect(() => {
    // function inside the auth library inside firebase
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // check if the database has updated with the new data
        userRef.onSnapshot(snapShot => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

        setUserAuth({
          currentUser: props.currentUser
        });
      }
    });
  }, [props]);

  return (
    <Fragment>
      {/* shows no matter what */}
      <Header />
      {/* shows one of these components inside switch statement */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, { setCurrentUser })(App);
