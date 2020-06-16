import React, { Component } from "react";
import "../../assets/styles/signup.scss";
import "../../assets/styles/icons.css";

class SignUp extends Component {
  render() {
    return (
      <div className="pathshala__signup">
        <div className="header">
          <div id="title" nav="/">
            <label className="title">
              {" "}
              <span>P</span>athshala{" "}
            </label>
            <label className="desc"> | Let's learn digitally </label>
          </div>
        </div>
        <img id="banner" src="/images/banner5.jpg" alt="banner" />
        <div className="body">
          <div className="form water">
            <div className="form-header">
              <div className="title"> Student Signup </div>
            </div>
            <div className="form-body box center">
              <div className="element">
                <div className="label"> First Name </div>
                <div className="control">
                  <span className="holder h-name"></span>
                  <input type="text" className="textbox" id="first-name" />
                </div>
              </div>
              <div className="element">
                <div className="label"> Last Name </div>
                <div className="control">
                  <input type="text" className="textbox" id="last-name" />
                </div>
              </div>
              <div className="element">
                <div className="label"> Email Id </div>
                <div className="control">
                  <span className="holder h-email"></span>
                  <input type="text" className="textbox" id="email" />
                </div>
              </div>
              <div className="element">
                <div className="label"> Phone Number</div>
                <div className="control">
                  <span className="holder h-phone"></span>
                  <input type="text" className="textbox" id="phone" />
                </div>
              </div>
              <div className="element">
                <div className="label"> Location </div>
                <div className="control">
                  <span className="holder h-location"></span>
                  <input
                    type="text"
                    id="location"
                    className="textbox"
                    placeholder="City Name"
                  />
                </div>
              </div>
              <div className="element">
                <div className="label"> Skill </div>
                <div className="control">
                  <input
                    type="text"
                    id="skill"
                    className="textbox"
                    placeholder="E.g. Python"
                  />
                </div>
              </div>
              <div className="element">
                <div className="label"> Password </div>
                <div className="control">
                  <span className="holder h-pswd"></span>
                  <input type="password" id="pswd" className="textbox" />
                </div>
              </div>
              <div className="element">
                <div className="label"> Confirm Password </div>
                <div className="control">
                  <input type="password" id="conf-pswd" className="textbox" />
                </div>
              </div>
            </div>
            <div className="form-footer center">
              <div className="element">
                <div className="control">
                  <input type="submit" value="Signup" className="button green" />
                </div>
              </div>
              <div className="element">
                <div className="control" id="login-link">
                  <input
                    type="submit"
                    value="Already have account? Login now."
                    className="link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
