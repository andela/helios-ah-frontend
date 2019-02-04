import React from 'react';
import { shallow } from 'enzyme';
import FlashMessageList, { mapStateToProps }
  from '../../components/FlashMessagesList';


describe('FlashMessageList component', () => {
  let wrapper;
  let state;
  beforeEach(() => {
    wrapper = shallow(<FlashMessageList />);
  });
  describe('Renders Flash Messages', () => {
    it('renders flash messages', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
    });
  });
  describe('methods that are called', () => {
    it('should show previous error messages', () => {
      state = {
        flashMessages: ['Invalid email or password']
      };
      expect(mapStateToProps(state).messages['0'])
        .toBe('Invalid email or password');
    });
  });
});
