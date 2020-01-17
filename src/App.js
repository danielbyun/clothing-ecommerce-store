import React, { Fragment, useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/actions/userActions";

const App = props => {
  console.log(props);
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
          currentUser: null
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
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </Fragment>
  );
};

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

export default connect(null, { setCurrentUser })(App);
