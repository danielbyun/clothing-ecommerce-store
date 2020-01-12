import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up";

import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

const App = () => {
  const [userAuth, setUserAuth] = useState({
    currentUser: null
  });

  useEffect(() => {
    // function inside the auth library inside firebase
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // check if the database has updated with the new data
        userRef.onSnapshot(snapShot => {
          setUserAuth({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

        console.log(userAuth);

        setUserAuth({
          currentUser: null
        });
      }
    });
  }, []);

  return (
    <Fragment>
      {/* shows no matter what */}
      <Header currentUser={userAuth} />
      {/* shows one of these components inside switch statement */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
