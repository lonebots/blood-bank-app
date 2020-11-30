import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/*<Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
