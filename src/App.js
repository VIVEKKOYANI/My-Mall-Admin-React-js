import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route path="" render={() => "404 Not Found"} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
