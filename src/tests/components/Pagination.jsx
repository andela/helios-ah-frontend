import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../../components/Pagination';

describe('Unit test for Signup Form component', () => {
  const propsObject = {
    activePage: 1,
    itemsCountPerPage: 3,
    totalItemsCount: 867,
    pageRangeDisplayed: 3,
    onChange: () => {}
  };
  it('should render a Pagination component', () => {
    const wrapper = shallow(<Pagination {...propsObject} />);
    expect(wrapper.find('Pagination').length).toEqual(1);
  });
});
