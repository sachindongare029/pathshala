import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../../assets/styles/login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="pathshala__login">
        <Header />
        <img className="login__banner" src="/images/banner1.jpg" alt="banner" />
        <div class="login__body">
          <div class="form water">
            <div class="form-header">
              <div class="title"> Login </div>
              <div class="desc">
                Login with your username and password to start learning{" "}
              </div>
            </div>
            <div class="form-body center">
              <div class="element">
                <div class="label"> Username </div>
                <div class="control">
                  <span class="holder h-name"></span>
                  <input type="text" class="textbox" id="username" />
                </div>
              </div>
              <div class="element">
                <div class="label"> Password </div>
                <div class="control">
                  <span class="holder h-pswd"></span>
                  <input
                    type="password"
                    id="pswd"
                    class="textbox holder-pswd"
                  />
                </div>
              </div>
              <div class="element">
                <div class="control forgot-pswd-link">
                  <input type="submit" value="Forgot password?" class="link" />
                </div>
              </div>
              <div class="control">
                <Link to="/dashboard">
                  <input type="submit" value="Login" class="button green" />
                </Link>
              </div>
              <div class="control signup-link">
                <Link to="/signup">
                  <input
                    type="submit"
                    value="Don't have account? Create one now."
                    class="link"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
