import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import Bookmark from '../../components/Bookmark';

const { expect } = chai;

describe('Unit test for the Bookmark Card component.', () => {
  it('should render a card for listing bookmarks', () => {
    const bookmark = {
      bookmark: {
        title: 'articleTitle',
        User: { firstName: 'jide', lastName: 'ajayi' },
        createdAt: '2019-01-16T12:37:58.550Z',
      },
    };
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Bookmark
      bookmark={bookmark}
      onDeleteBookmark={mockCallBack}
    />);
    wrapper.find('.d-md-block').simulate('click');
    wrapper.find('.d-md-none').simulate('click');
    expect(wrapper.find('.bookmarkCard').length).to.equal(1);
    expect(wrapper.find('.cardTitle').length).to.equal(1);
    expect(mockCallBack.mock.calls.length).to.equal(2);
  });
});
