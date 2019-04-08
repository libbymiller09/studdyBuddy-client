import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../index.css';
import '../float.grid.css';

import Nav from './Nav';
import Home from "./Home";
import MapPage from './MapPage/mapPage';
import MeetupPage from './MeetupPage/meetupPage';
import Footer from './Footer';
import { deleteMeetup } from '../actions';
import DeleteMeetup from './MeetupPage/deleteMeetup';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={MapPage} />
            <Route path="/meetups" component={MeetupPage} />
            <Route path="/meetups/:id" component={deleteMeetup} />
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);