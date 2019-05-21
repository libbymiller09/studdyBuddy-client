import React from 'react';
import MeetupList from './meetupList';
import AddMeetupForm from './addMeetupForm';
import './meetupPage.css';
import '../../float.grid.css';

const MeetupPage = () => {
  return (
    <div>
      <MeetupList />
      <div>
        <h2>Add your own meetup!</h2>
        <AddMeetupForm />
      </div>
    </div>
  );
};

export default MeetupPage;