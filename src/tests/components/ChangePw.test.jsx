import React from 'react';
import { shallow } from 'enzyme';
import ChangePw from '../../components/ChangePw';

describe('Unit test for Change Password Form component', () => {
  const propsObject = {
    onChange: () => {},
    password: 'password',
    isRequestSent: true,
    confirmPassword: 'password',
    submitDetails: () => {},
  };
  it('should render a form with 2 form input fields and 1 submit buttons', () => {
    const wrapper = shallow(<ChangePw {...propsObject} />);
    const formFields = wrapper.find('FormInput');
    expect(formFields.length).toEqual(2);
    const buttons = wrapper.find('SubmitButton');
    expect(buttons.length).toEqual(1);
  });
});
