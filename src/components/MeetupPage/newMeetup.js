import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AddMeetupForm from './addMeetupForm';

class NewMeetup extends Component {
  render() {
    return (
      <div>
        <AddMeetupForm />
      </div>
    );
  };
};

export default reduxForm({
  form: 'addMeetupForm'
})(NewMeetup);