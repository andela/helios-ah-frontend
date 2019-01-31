import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from '../../components/Sidebar';

describe('Render the Sidebar component', () => {
  const props = {
    getUserArticles: () => {}
  };
  it('renders the Sidebar component', () => {
    const wrapper = shallow(<SideBar {...props} />);
    expect(wrapper.find('div').length).toEqual(6);
    expect(wrapper.find('div').find('i').length).toEqual(4);
    expect(wrapper.find('h4').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
