import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import Button from '../../components/Button';

const { expect } = chai;
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
    expect(wrapper.find('button').text()).to.equal('buttonValue');
    expect(wrapper.find('button').length).to.equal(1);
    expect(wrapper.find('button').is('#login-button')).to.equal(true);
    expect(wrapper.find('button').is('.someClassProperty')).to.equal(true);
    expect(wrapper.is('.col-md-4')).to.equal(true);
  });
});
