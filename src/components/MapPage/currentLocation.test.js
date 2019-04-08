import React from 'react';
import {shallow, mount} from 'enzyme';

import CurrentLocation from './currentLocation';

describe('<CurrentLocation />', () => {
  it('Renders without crashing', () => {
      shallow(<CurrentLocation />);
  });
});
