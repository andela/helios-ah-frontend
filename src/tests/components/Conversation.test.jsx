import React from 'react';
import { shallow } from 'enzyme';
import { Conversation } from '../../components';

describe('Unit test for the conversation component', () => {
  it('should render the conversation component', () => {
    const wrapper = shallow(<Conversation />);
    expect(wrapper.is('#conversation-container')).toBe(true);
    expect(wrapper.find('p').text()).toEqual('Conversation(4)');
  });
});
