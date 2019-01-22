import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';

describe('Unit test for the submit button component. ', () => {
  it('should render an html with a button tag', () => {
    const propObj = {
      onClick: () => {},
      isRequestSent: true,
      value: 'buttonValue',
      id: 'login-button',
      className: 'someClassProperty',
      columnAttribute: 'col-md-4'
    };
    const wrapper = shallow(<SubmitButton {...propObj} />);
    expect(wrapper.find('button').text()).toEqual('buttonValue');
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').is('#login-button')).toEqual(true);
    expect(wrapper.find('button').is('.someClassProperty')).toEqual(true);
    expect(wrapper.is('.col-md-4')).toEqual(true);
  });
  describe('Render Submit button', () => {
    let wrapper;
    let props;

    beforeAll(() => {
      props = {
        submitDetails: jest.fn(),
        isRequestSent: true,
        value: 'SIGNUP',
        idAttribute: 'btn-test',
        className: 'btn',
        columnAttribute: 'signup-col'
      };
      wrapper = shallow(<SubmitButton {...props} />);
    });

    it('it should render submit button', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
