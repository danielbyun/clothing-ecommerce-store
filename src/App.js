import React, { Fragment } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/Shop/Shop";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
