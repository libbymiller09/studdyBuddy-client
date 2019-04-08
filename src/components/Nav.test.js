import React from 'react';
import Link from 'react-router-dom';
import {shallow, mount} from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />);
  });
});