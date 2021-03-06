/*    App.js    */

// Setup.
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components.
import ListBeers from "./components/ListBeers";
import SingleBeer from "./components/SingleBeer";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import MyNav from "./components/MyNav";

// Styles
import "./App.css";

// Rendering function.
function App() {
  return (
    <Fragment>
      <MyNav />

      <Switch>
        <Route
          exact
          path="/beers"
          render={() => {
            return <ListBeers />;
          }}
        />

        <Route path="/beers/:beerId" component={SingleBeer} />

        <Route
          path="/random-beer"
          render={() => {
            return <RandomBeer />;
          }}
        />

        <Route
          path="/new-beer"
          render={() => {
            return <NewBeer />;
          }}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
