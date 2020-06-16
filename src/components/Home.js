import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello world</h1>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}

export default withRouter(Home);