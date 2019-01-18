import React from 'React';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import FlashMessagesList from '../../components/FlashMessagesList';
import FlashMessage from '../../components/FlashMessage';
import { mapStateToProps } from '../../components/FlashMessagesList';



describe('FlashMessageList component', () => {
  let wrapper;
  let props

  props = {
    key: 1,
    message: 'list',
    deleteFlashMessage: jest.fn(),
  }
  beforeAll(() => {
    wrapper = shallow(<FlashMessagesList />);
  });
  describe('Renders Flash Messages', () => {

    it('renders flash messages', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
    });
  });
  describe('methods that are called', () => {
    it('should show previous error messages', () => {
      const state = {
        flashMessages: ['Invalid email or password']
      };
      expect(mapStateToProps(state).messages["0"]).toBe('Invalid email or password');
    });
  });
  describe('Render Flash Message', () => {
    it('should list flash message', () => {
      let store;
      let state
      const middlewares = [thunk]
      const mockStore = configureStore(middlewares)
      state = {
        flashMessages: [{
          id: 0.4,
          type: 'error',
          message: 'Invalid email'
        }, {
          id: 0.234,
          type: 'warning',
          message: 'Check your email'
        }]
      }
      store = mockStore(state);
      wrapper = mount(<Provider store={store}><FlashMessagesList {...props} /></Provider>)

      expect(wrapper.find(FlashMessage).length).toBe(2)
      wrapper.unmount();
    });
  });
});
