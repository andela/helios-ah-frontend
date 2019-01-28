import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../components/SignupForm';

describe('Unit test for Signup Form component', () => {
  const propsObject = {
    onChange: () => {},
    username: 'username',
    password: 'password',
    email: 'email',
    isRequestSent: true,
    confirmPassword: 'password',
    firstName: 'firstName',
    lastName: 'Shola',
    errors: 'some error',
    submitDetails: () => {},
  };
  it('should render a form with 6 form input fields and 2 buttons', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    expect(wrapper.find('TextFieldGroup').length).toEqual(6);
  });
  it('should render a form with 1 submit button', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    expect(wrapper.find('SubmitButton').length).toEqual(1);
  });
  it('should render a form with one button of class btn', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    expect(wrapper.find('.btn').length).toEqual(1);
  });
  it('should display a welcome message to the user', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    const welcomeH2Text = wrapper.find('#welcome-text-container').text();
    expect(welcomeH2Text).toEqual(
      'Writing is an art.Explore your creative side at Authors Haven.'
    );
  });
});
