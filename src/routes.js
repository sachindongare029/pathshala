import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/User/Login";
import SignUp from './components/User/SignUp';
import Dashboard from './components/Dashboard';

const Routes = () => (
  <React.Fragment>
    <main className="main">
      <Route exact path={"/"}>
        <Redirect from="/" to="/signup"/>
      </Route>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/dashboard"} component={Dashboard} />
    </main>
  </React.Fragment>
);

export default Routes;
