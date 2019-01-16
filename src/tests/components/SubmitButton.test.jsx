import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import SubmitButton from '../../components/SubmitButton';

const { expect } = chai;
describe('Unit test for the submit button component. ', () => {
  it('should render an html with a button tag', () => {
    const propObj = {
      submitDetails: () => {},
      isRequestSent: true,
      buttonValue: 'buttonValue',
      idAttribute: 'login-button',
      buttonClass: 'someClassProperty',
      columnAttribute: 'col-md-4'
    };
    const wrapper = shallow(<SubmitButton {...propObj} />);
    expect(wrapper.find('button').text()).to.equal('buttonValue');
    expect(wrapper.find('button').length).to.equal(1);
    expect(wrapper.find('button').is('#login-button')).to.equal(true);
    expect(wrapper.find('button').is('.someClassProperty')).to.equal(true);
    expect(wrapper.is('.col-md-4')).to.equal(true);
  });
});
