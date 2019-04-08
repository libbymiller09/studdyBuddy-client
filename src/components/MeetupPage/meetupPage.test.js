import React from 'react';
import {shallow, mount} from 'enzyme';

import MeetupPage from './meetupPage';

describe('<MeetupPage />', () => {
  it('Renders without crashing', () => {
      shallow(<MeetupPage />);
  });
});