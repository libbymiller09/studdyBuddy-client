import React from 'react';
import {shallow, mount} from 'enzyme';

import MapContainer from './MapContainer';

describe('<MapContainer />', () => {
  it('Renders without crashing', () => {
      shallow(<MapContainer />);
  });
});