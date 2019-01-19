import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import App from '../../components/App';

const { expect } = chai;
describe('Test to successfully render <App />', () => {
  it('renders the <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
  });
});
