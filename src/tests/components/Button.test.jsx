import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';


describe('Integration test for the button component. ', () => {
  it('should render an html with a button tag', () => {
    const propObj = {
      onClick: () => {},
      isRequestSent: true,
      value: 'buttonValue',
      id: 'login-button',
      className: 'someClassProperty',
      columnAttribute: 'col-md-4'
    };
    const wrapper = shallow(<Button {...propObj} />);
    expect(wrapper.find('button').text()).toEqual('buttonValue');
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').is('#login-button')).toEqual(true);
    expect(wrapper.find('button').is('.someClassProperty')).toEqual(true);
    expect(wrapper.is('.col-md-4')).toEqual(true);
  });
});
