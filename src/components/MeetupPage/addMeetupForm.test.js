import React from 'react';
import {shallow, mount} from 'enzyme';

import AddMeetupForm from './addMeetupForm';

describe('<AddMeetupForm />', () => {
  it('Renders without crashing', () => {
      shallow(<AddMeetupForm />);
  });

  it('Renders the add button initially', () => {
    const wrapper = shallow(<AddMeetupForm />);
    expect(wrapper.hasClass ('submitButton')).toEqual(false);
  });

});