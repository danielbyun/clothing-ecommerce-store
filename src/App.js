import React, { Fragment, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/selectors/userSelectors";
import { createStructuredSelector } from "reselect";

import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up";
import Checkout from "./Pages/Checkout/Checkout";
import { checkUserSession } from "./redux/actions/userActions";

const App = props => {
  useDeepCompareEffect(() => {
    // // run this once to add some data into the firebase database
    // const { collectionsArray } = props;
    // // don't pass the full array
    // addCollectionAndDocuments(
    //   "collections",
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );
    // ========== OBSERVABLE PATTERN ==========
    // function inside the auth library inside firebase
    // auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     // check if the database has updated with the new data
    //     userRef.onSnapshot(snapShot => {
    //       props.setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //     setUserAuth({
    //       currentUser: props.currentUser
    //     });
    //   }
    // });

    const { checkUserSession } = props;
    checkUserSession();
  }, [props]);

  return (
    <Fragment>
      {/* shows no matter what */}
      <Header />
      {/* shows one of these components inside switch statement */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
