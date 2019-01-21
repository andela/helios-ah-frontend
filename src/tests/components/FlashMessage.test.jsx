import React from 'react';
import { shallow } from 'enzyme';
import FlashMessage from '../../components/FlashMessage';

describe('Render Flash Messages', () => {
  let wrapper;
  let props;

  beforeAll(() => {
    props = {
      message:
      {
        type: 'error',
        message: 'Invalid email'
      },
      deleteBannerhMessage: jest.fn(),
      customAlertClass: 'mycustomclass',
      bannerAlertClass: jest.fn()
    };
    wrapper = shallow(<FlashMessage {...props} />);
  });
  describe('Flash error classes when type props are changed', () => {
    props = {
      message:
      {
        id: 0.4,
        type: 'error',
        text: 'Invalid email'
      },
      deleteBannerMessage: jest.fn()
    };
    it('it calls danger flash message class', () => {
      wrapper.setProps({
        message:
        {
          type: 'error'
        }
      });
      expect(wrapper.find('.alert-danger').length).toEqual(1);
    });
    it('it calls warning flash message class', () => {
      wrapper.setProps({
        message:
        {
          type: 'warning',
        },
      });
      expect(wrapper.find('.alert-warning').length).toEqual(1);
    });
    it('it calls warning flash message class', () => {
      wrapper.setProps({
        message:
        {
          type: 'success',
        },
      });
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
    it('it calls the onclick deleteBannerMessages props', () => {
      props = {
        message:
        {
          type: 'error',
          message: 'Invalid email'
        },
        deleteBannerMessage: jest.fn(),
        customAlertClass: 'mycustomclass',
        bannerAlertClass: jest.fn()
      };
      wrapper = shallow(<FlashMessage {...props} />);
      const instance = wrapper.instance();
      instance.handleOnClick();
      expect(props.deleteBannerMessage).toHaveBeenCalled();
    });
  });
});
