import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Unit test for create article component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      onDraft: () => {},
      onPublish: () => {},
    };
  });
  it('should render the header', () => {
    wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('#header').length).toBe(1);
    expect(wrapper.find('div').length).toBe(7);
  });
});
