import React, { Fragment } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>hats page son</h1>
  </div>
);

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Homepage exact path="/" />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
