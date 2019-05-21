import React from 'react';
import {shallow, mount} from 'enzyme';

import MeetupList from './meetupList';

describe('<MeetupList />', () => {

  it('Renders without crashing', () => {
      shallow(<MeetupList meetups ={[]}/>);
  });

  
});