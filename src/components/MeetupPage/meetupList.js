import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetups } from '../../actions';

class MeetupList extends Component {

  componentDidMount() {
    this.props.fetchMeetups();
  };

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.meetups !== nextProps.meetups) {
  //     this.setState({changed: true});
  //   };
  // };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.meetups !== this.props && this.props.meetups) {
  //     this.props.fetchMeetups();
  //   };
  // };

  renderMeetups() {
    const meetupProps = this.props.meetups || [];
    return meetupProps.map(function(meetup) {
    // return this.props && this.props.meetups && this.props.meetups.map(function(meetup) {
      return (
        <div key={meetup._id} >
          <div className="meetupContent">
            <h3 className="subject">Subject: {meetup.subject}</h3>
            <h3 className="time">Time: {meetup.time}</h3>
            <h3 className="place">Place: {meetup.place}</h3>
          </div>
          <button onClick={() => { completedButton(meetup._id) }} className="check-toggle" type="button">Completed</button>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Current Scheduled Meetups</h2>
        <div className="meetupListContainer">
          {this.renderMeetups()}      
        </div>
      </div>
    );
  };
};

function completedButton(id) {
  fetch('/api/meetups/' + id, {
    method: "DELETE",
  });
};

function mapStateToProps({ meetups }) {
  return { meetups };
};

export default connect(mapStateToProps, { fetchMeetups })(MeetupList);

