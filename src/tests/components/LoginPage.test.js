import React from 'React';
import { shallow, mount } from 'enzyme';
import LoginPage from '../../views/LoginPage';
import TextFieldGroup from '../../components/TextFieldGroup';
import frontEndValidation from '../../utils/frontendValidation';

describe('Render Login Page', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<LoginPage />)
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
  describe('calling methods directly from login page', () => {
    it('it should setstate of email when input email value is changed', () => {
      const event = {
        target: {
          name: 'email',
          value: 'teejay2k4@yahoo.com'
        }
      }
      expect(wrapper.state('email')).toBe('');
      wrapper.find(TextFieldGroup).at(0).simulate('change', event)
      expect(wrapper.state('email')).toBe('teejay2k4@yahoo.com');
    });
  });
  it('it should setstate of input password when input password value is changed', () => {
    const event = {
      target: {
        name: 'password',
        value: 'password'
      }
    }
    expect(wrapper.state('password')).toBe('');
    wrapper.find(TextFieldGroup).at(1).simulate('change', event)
    expect(wrapper.state('password')).toBe('password');
  });
  it('it should call the isValid function which should return true if there are no errors', () => {
    const instance = wrapper.instance()
    instance.setState({ email: 'teejay2k4@yahoo.com', password: 'testpassword'})
    expect (instance.isValid()).toEqual(true)
  });
  it('it should call the isValid function which should return false if there are errors', () => {
    const instance = wrapper.instance()
    instance.setState({ email: '', password: ''})
    expect (instance.isValid()).toEqual(false)
  });
});

