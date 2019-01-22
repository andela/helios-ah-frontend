import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../components/LoginForm';

let wrapper;
describe('Render Login Page', () => {
  beforeAll(() => {
    wrapper = shallow(<LoginForm />);
  });
  describe('render Login Page', () => {
    it('renders the login page component', () => {
      expect(wrapper.find('div').length).toEqual(7);
      expect(wrapper.find('div').find('span').length).toEqual(4);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('h3').length).toEqual(1);
      expect(wrapper.find('h5').length).toEqual(1);
      expect(wrapper.find('form').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
