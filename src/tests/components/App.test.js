import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('Test to successfully render <App />', () => {
  it('renders the <App /> components', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
