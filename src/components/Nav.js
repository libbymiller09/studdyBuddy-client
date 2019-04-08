import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';

import './nav.css';
import '../float.grid.css';

class Nav extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li id="loginButton"><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return [
          <li key="1"><Link to="/">Home</Link></li>,
          // <li key="2"><Link to="/map">Map</Link></li>,
          <li key="3"><Link to="/meetups">Meetups</Link></li>,
          <li key="4"><a href="/api/logout">Logout</a></li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <ResponsiveMenu 
          menuOpenButton={<div><i class="fas fa-bars"></i></div>}
          menuCloseButton={<div><i class="fas fa-times"></i></div>}
          changeMenuOn="500px"
          largeMenuClassName="large-menu-className"
          smallMenuClassName="small-menu-className"
          menu={
            <ul>
            <li className="authLink">
              <Link to={this.props.auth ? '/' : '/'}
              >
                StudyBuddy
              </Link>
            </li>
              {this.renderContent()}
          </ul>
          }
        />
        {/* <div className="authLink">
          <Link to={this.props.auth ? '/' : '/'}
          >
          StudyBuddy
          </Link> */}
          
        {/* </div> */}
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Nav);