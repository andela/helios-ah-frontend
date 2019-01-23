import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from '../../components/ResetPasswordForm';

const propsObject = {
  onChange: () => (''),
  onSubmit: () => (''),
  onClick: () => (''),
  emailRef: {},
  spanRef: {},
  buttonRef: {}
};

describe('Test to successfully render <ResetPassword />', () => {
  test('renders the <ResetPassword /> components', () => {
    const wrapper = shallow(<ResetPassword {...propsObject} />);
    expect(wrapper.length).toBe(1);
  });

  test('should render Passowrd reset page', () => {
    const wrapper = shallow(<ResetPassword {...propsObject} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('expect the element h1 to have predefined content', () => {
    const wrapper = shallow(<ResetPassword {...propsObject} />);
    expect(wrapper.find('h1').text()).toBe('FORGOT YOUR PASSWORD?');
  });

  test('expect the element h3 to have a ascribed content', () => {
    const wrapper = shallow(<ResetPassword {...propsObject} />);
    expect(wrapper.find('h3').text())
      .toBe('ENTER YOUR EMAIL ADDRESS BELOW AND REQUEST A RESET LINK');
  });
});
