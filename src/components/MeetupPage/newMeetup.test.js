import React from 'react';
import {shallow, mount} from 'enzyme';

import NewMeetup from './newMeetup';

describe('<NewMeetup />', () => {
  it('Renders without crashing', () => {
      shallow(<NewMeetup />);
  });
});