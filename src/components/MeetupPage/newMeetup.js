import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AddMeetupForm from './addMeetupForm';
import AddMeetupFormReview from './addMeetupFormReview';

class NewMeetup extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <AddMeetupFormReview
          onCanel={() => this.setState({ showFormReview: false})}
        />
      );
    }

    return (
      <AddMeetupForm 
        onFormSubmit={() => this.setState({ showFormReview: true })} 
      />    
    );
  }

  render() {
    return ( 
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'addMeetupForm'
})(NewMeetup);