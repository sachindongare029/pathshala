import React from 'react';
import { withRouter } from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Login Page</h1>
      </div>
    );
  }
}

export default withRouter(Login);