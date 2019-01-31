import React from 'react';
import { shallow } from 'enzyme';
import { Comment } from '../../components';

describe('Unit test for the comment component', () => {
  it('should render an image tag, two span tags and a P tag', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('span').length).toEqual(2);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
  });
});
