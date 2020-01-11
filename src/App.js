import React, { Fragment } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <Fragment>
      {/* shows no matter what */}
      <Header />
      {/* shows one of these components inside switch statement */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
