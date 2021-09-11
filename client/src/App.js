import React, {Fragment, useEffect, lazy, Suspense} from "react";
// import useDeepCompareEffect from "use-deep-compare-effect";

import {Route, Switch, Redirect} from "react-router-dom";

import {connect} from "react-redux";

import {selectCurrentUser} from "./redux/selectors/userSelectors";
import {createStructuredSelector} from "reselect";

import Header from "./Components/Header/Header";
import Spinner from "./Components/Spinner/Spinner";

import {checkUserSession} from "./redux/actions/userActions";

import {GlobalStyle} from "./globalStyles";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ShopPage = lazy(() => import("./Pages/Shop/Shop"));
const SignInAndSignUpPage = lazy(() =>
  import("./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up")
);
const CheckoutPage = lazy(() => import("./Pages/Checkout/Checkout"));

const App = (props) => {
  const {checkUserSession} = props;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // useDeepCompareEffect(() => {
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

  // checkUserSession();
  //}, [props]);

  return (
    <Fragment>
      <GlobalStyle />
      {/* shows no matter what */}
      <Header />
      {/* shows one of these components inside switch statement */}
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
