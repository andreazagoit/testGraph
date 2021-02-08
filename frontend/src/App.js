import React from "react";
import "./App.scss";
import { Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user/:name" component={UserPage} />
        <Route path="/dashboard" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
