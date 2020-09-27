import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <h1>Dashboard</h1>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route path="" render={() => "404 Not Found"} />
      </Switch>
    );
  }
}
export default App;
