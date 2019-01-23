import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../views/LoginPage';

describe('Render Login Page', () => {
  let wrapper;
  let props;
  let event;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<LoginPage {...props} />);
    instance = wrapper.instance();
    props = {
      clearBannerMessages: jest.fn(),
      userLogin: jest.fn(),
      addBannerMessage: jest.fn()
    };
  });
  describe('calling methods directly from login page', () => {
    it('it should setstate of email when input email value is changed', () => {
      event = {
        target: {
          name: 'email',
          value: 'teejay2k4@yahoo.com'
        }
      };
      instance.handleOnChange(event);
      expect(wrapper.state('email')).toEqual('teejay2k4@yahoo.com');
    });
    it('it should setstate of input password when input password value is + '
  + 'changed',
    () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: 'password'
        }
      };
      instance.handleOnChange(event);
      expect(wrapper.state('password')).toEqual('password');
    });
    it('it should call the isValid function which should return true if there +'
  + 'are no errors', () => {
      instance.setState({
        email: 'teejay2k4@yahoo.com', password: 'testpassword'
      });
      expect(instance.isValid()).toEqual(true);
    });
    it(`it should call the isValid function which should return false ${
      'if there are two errors'}`, () => {
      instance.setState({ email: '', password: '' });
      expect(instance.isValid()).toEqual(false);
    });
    it(`it should call the isValid function which should return false ${
      'if there is only one error'}`, () => {
      instance.setState({ email: 'tee', password: 'anthony' });
      expect(instance.isValid()).toEqual(false);
    });
    it(`it should call clearBannerMessages props if input fields are ${
      'valid and on submission'}`,
    () => {
      wrapper = shallow(<LoginPage
        {...props}
        onClick={props.clearBannerMessages}
      />);
      instance = wrapper.instance();
      instance.setState({ email: 'teejay2k@yahoo.com', password: 'anthony' });
      instance.handleOnSubmit(event);
      expect(props.clearBannerMessages).toHaveBeenCalled();
    });
    it(`it should call setError state to null object if there are no ${
      'errors on submit'}`,
    () => {
      instance.setState({
        email: 'teejay2k4@yahoo.com', password: 'testpassword'
      });
      instance.handleOnSubmit(event);
      expect(wrapper.state().errors).toEqual({});
    });
    it('it should set state of field on input and return an error for an +'
  + 'invalid field',
    () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: 'password'
        }
      };
      instance.handleOnInput(event);
      expect(wrapper.state().password).toEqual('password');
    });
    it('it should set state of error if wrong value is added on input', () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: ''
        }
      };
      instance.setState({ email: '', password: '' });
      instance.handleOnInput(event);
      expect(wrapper.state().errors).toEqual({
        password: 'Password field is required'
      });
    });
    it(`it should set state of field on blur and return an error for an ${
      +'invalid field'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
          value: ''
        }
      };
      instance.setState({ email: '', password: '' });
      instance.handleOnBlur(event);
      expect(wrapper.state().errors).toEqual({
        password: 'Password field is required'
      });
    });
    it(`Errors state should be deleted on blur if the former error is removed ${
      'from input form'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'password',
        }
      };
      const updatedEvent = {
        preventDefault() { },
        target: {
          name: 'password',
        }
      };
      instance.setState({ password: '' }, () => {
        instance.handleOnBlur(event);
        expect(wrapper.state().errors).toEqual({
          password: 'Password field is required'
        });
      });
      instance.setState({ password: 'myPassword' });
      instance.handleOnBlur(updatedEvent);
      expect(wrapper.state().errors).toEqual({});
    });
    it(`Errors state should be empty on input if the former error is removed ${
      'from input form'}`, () => {
      event = {
        preventDefault() { },
        target: {
          name: 'email',
          value: ''
        }
      };
      const updatedEvent = {
        preventDefault() { },
        target: {
          name: 'email',
          value: 'mySecretEmail@mail.com'
        }
      };
      instance.setState({ email: '' }, () => {
        instance.handleOnInput(event);
        expect(wrapper.state().errors).toEqual({
          email: 'Email field is required'
        });
      });
      instance.setState({ email: 'mySecretEmail@mail.com' }, () => {
        instance.handleOnInput(updatedEvent);
        expect(wrapper.state().errors).toEqual({});
      });
    });
  });
});
