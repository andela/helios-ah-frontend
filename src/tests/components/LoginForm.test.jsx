import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../components/LoginForm';

describe('Render Login Page', () => {
  describe('render Login Page', () => {
    const propsObj = {
      onChange: () => {},
      onBlur: () => {},
      onInput: () => {},
      errors: 'some error',
      isRequestSent: true,
      submitDetails: () => {},
      email: 'some@email.com',
      password: 'password'
    };
    it('renders the login page component', () => {
      const wrapper = shallow(<LoginForm {...propsObj} />);
      expect(wrapper.find('div').length).toEqual(8);
      expect(wrapper.find('div').find('span').length).toEqual(4);
      expect(wrapper.find('TextFieldGroup').length).toEqual(2);
      expect(wrapper.find('SubmitButton').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('h3').length).toEqual(1);
      expect(wrapper.find('h5').length).toEqual(1);
      expect(wrapper.find('form').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
