import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('<App />', () => {
  it('renders three <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
