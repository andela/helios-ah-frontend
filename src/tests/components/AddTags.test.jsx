import React from 'react';
import { shallow } from 'enzyme';
import AddTags from '../../components/AddTags';


describe('Integration test for the AddTags component. ', () => {
  it('should render an html with a AddTags tag', () => {
    const propObj = {
      tags: true,
      handleDelete: jest.fn(),
      handleAddition: jest.fn(),
      handleDrag: jest.fn(),
      onPublish: jest.fn()
    };
    const wrapper = shallow(<AddTags {...propObj} />);
    expect(wrapper.find('#modal-trigger').length).toBe(1);
    expect(wrapper.find('#modal-label').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(3);
  });
});
