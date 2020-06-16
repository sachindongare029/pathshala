import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Home from "./components/Home";
import About from './components/About';
import SignUp from './components/User/SignUp';

const Routes = () => (
  <React.Fragment>
    <main className="main">
      <Route exact path={"/"}>
        <Redirect from="/" to="/signup"/>
      </Route>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/about"} component={About} />
    </main>
  </React.Fragment>
);

export default Routes;
