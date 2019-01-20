import React from 'react';
import { mount, shallow } from 'enzyme';
import ResetPassword from '../../components/ResetPassword.jsx';

describe('Test to successfully render <ResetPassword />', () => {

  test('should be mocked',  ()=> {
    const wrapper = mount(<ResetPassword />)
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(ResetPassword);
    inst.clearEmail();
    expect(inst.clearEmail()).toBeTruthy;
    inst.statusHandler();
    expect(inst.statusHandler()).toBeTruthy;
    inst.clearStatus();
    expect(inst.clearStatus()).toBeTruthy;
  });

  test('renders the <ResetPassword /> components', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper.length).toBe(1);
  });

  test('should render Passowrd reset page', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper).toMatchSnapshot();
  });

  test('expect the element h1 to have a ascribed content', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper.find('h1').text()).toBe('FORGOT YOUR PASSWORD?');
  });

  test('expect the element h3 to have a ascribed content', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper.find('h3').text()).toBe('ENTER YOUR EMAIL ADDRESS BELOW AND REQUEST A RESET LINK');
  });

  test('expect the elements to have a single button', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper.find('button').length).toBe(1);
  });
});

test('expect the elements to have a single button', () => {
  const wrapper = shallow(<ResetPassword />);
  const componentEmailState = wrapper.state().email;
  const componentStatusState = wrapper.state().status;
  expect(componentEmailState).toEqual(null);
  expect(componentStatusState).toEqual(null);
});

test('expect the state.status to be updated with "error" when user not found', () => {
  const wrapper = mount(<ResetPassword />);
  const RequestPasswordResetButton = wrapper.find('input');
  RequestPasswordResetButton.simulate('change', {
    preventDefault: () => {}
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

test('expect the state.status to be updated with "error" when user not found', async () => {
  const wrapper = shallow(<ResetPassword />);
  const RequestPasswordResetButton = wrapper.find('form');
  await RequestPasswordResetButton.simulate('submit', {
    preventDefault: () => {}
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
