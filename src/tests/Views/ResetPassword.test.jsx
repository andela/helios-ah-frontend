/* eslint-disable no-unused-expressions */
import React from 'react';
import { mount, shallow } from 'enzyme';
import ResetPassword from '../../views/ResetPassword';

const propsObject = {
  onChange: () => (''),
  onSubmit: () => (''),
  onClick: () => (''),
  emailRef: {},
  spanRef: {},
  buttonRef: {}
};

test('expect the elements to have a single button', () => {
  const wrapper = shallow(<ResetPassword {...propsObject} />);
  const componentEmailState = wrapper.state().email;
  const componentStatusState = wrapper.state().status;
  expect(componentEmailState).toEqual(null);
  expect(componentStatusState).toEqual(null);
});

test('update state.status with "error" when user doesnt exist', () => {
  const wrapper = mount(<ResetPassword {...propsObject} />);
  const RequestPasswordResetButton = wrapper.find('input');
  RequestPasswordResetButton.simulate('change', {
    preventDefault: () => { }
  });
  setTimeout(() => {
    const componentStatusState = wrapper.state().status;
    expect(componentStatusState).toEqual('error');
  }, 500);
  setTimeout(() => {
    const span = wrapper.find('span#status');
    expect(span.text()).toBe('User Not Found');
  }, 500);
});


test('methods should be valid instances of the class', () => {
  const wrapper = mount(<ResetPassword {...propsObject} />);
  const inst = wrapper.instance();
  expect(inst).toBeInstanceOf(ResetPassword);
  expect(inst.clearEmail()).toBeTruthy;
  expect(inst.statusHandler()).toBeTruthy;
  expect(inst.clearStatus()).toBeTruthy;
  inst.onSubmit();
});
