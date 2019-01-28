import React from 'react';
import { shallow } from 'enzyme';
import ChangePassword from '../../components/ChangePassword';

describe('Unit test for Change Password Form component', () => {
  const propsObject = {
    onChange: () => {},
    password: 'password',
    isRequestSent: true,
    confirmPassword: 'password',
    submitDetails: () => {},
  };
  it('should render a form with 2 input fields and 1 submit buttons', () => {
    const wrapper = shallow(<ChangePassword {...propsObject} />);
    const formFields = wrapper.find('TextFieldGroup');
    expect(formFields.length).toEqual(2);
    const buttons = wrapper.find('SubmitButton');
    expect(buttons.length).toEqual(1);
  });
});
