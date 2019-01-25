import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../components/Search';

describe('Unit test for the Search component', () => {
  it('should mount the Search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('input').find('[id="search"]'));
    expect(wrapper.find('input').find('[type="text"]'));
  });
});
