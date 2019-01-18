import React from 'React';
import { shallow, mount } from 'enzyme';
import FlashMessage from '../../components/FlashMessage';
describe('Render Flash Messages', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      message:
      {
        id: 0.4,
        type: 'error',
        message: 'Invalid email'
      },
      deleteFlashMessage: jest.fn()
    }
    wrapper = shallow(<FlashMessage {...props} />);
  })
  describe('Flash error classes when type props are changed', () => {
    props = {
      message:
      {
        id: 0.4,
        type: 'error',
        message: 'Invalid email'
      },
      deleteFlashMessage: jest.fn()
    }
    it('it calls danger flash message class', () => {
      wrapper.setProps({
        message:
        {
          type: 'error'
        }
      })
      expect(wrapper.find('.alert-danger').length).toEqual(1);
    });
    it('it calls warning flash message class', () => {
      wrapper.setProps({
        message:
        {
          type: 'warning',
        },
      })
      expect(wrapper.find('.alert-warning').length).toEqual(1);
    });
    it('it calls warning flash message class', () => {
      wrapper.setProps({
        message:
        {
          type: 'success',
        },
      })
      expect(wrapper.find('.alert-success').length).toEqual(1);
    });
  });
  describe('parts of the component', () => {
    it('it calls warning flash message class', () => {
      wrapper = shallow(<FlashMessage {...props} />);
      expect(wrapper.find('div').find('button').length).toEqual(1);
      expect(wrapper.find('div').find('span').length).toEqual(1);
    });
  });
  describe('methods that are called', () => {
    it('it calls the onclick deleteFlashMessages props', () => {
      const component = shallow(<FlashMessage onClick={props.deleteFlashMessage} {...props} />);
      component
        .find('button.close')
        .simulate('click');
      expect(props.deleteFlashMessage).toHaveBeenCalled();
    });
  });
});