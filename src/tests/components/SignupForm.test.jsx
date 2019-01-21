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
    submitDetails: () => {},
  };
  it('should render a form with 6 form input fields and 2 buttons', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    const signupFormFields = wrapper.find('FormInput');
    expect(signupFormFields.length).toEqual(6);
  });
  it('should render a form with 1 submit button', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    const signupButtons = wrapper.find('SubmitButton');
    expect(signupButtons.length).toEqual(1);
  });
  it('should render a form with a button of type button', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    const loginButton = wrapper.find('Button');
    expect(loginButton.length).toEqual(1);
  });
  it('should display a welcome message to the user', () => {
    const wrapper = shallow(<SignupForm {...propsObject} />);
    const welcomeH2Text = wrapper.find('#welcome-text-container').text();
    expect(welcomeH2Text).toEqual(
      'Writing is an art.Explore your creative side at authors haven.'
    );
  });
});
