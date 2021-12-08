import React from "react";
import "./App.css";
import Home from "./page/Home";
import Rooms from "./page/Rooms";
import SingleRome from "./page/SingleRome";
import Error from "./page/Error";
import Navbar from "./Component/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRome} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
