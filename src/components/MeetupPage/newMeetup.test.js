import React from 'react';
import {shallow, mount} from 'enzyme';

import NewMeetup from './newMeetup';
import { AddMeetupForm } from './addMeetupForm';

describe('<NewMeetup />', () => {
  it('Renders without crashing', () => {
      shallow(<NewMeetup />);
  });
});