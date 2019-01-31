import React from 'react';
import { shallow } from 'enzyme';
import { AddComment } from '../../components';

describe('Unit test for the Add comment component', () => {
  const propsObj = {
    isRequestSent: false,
    onClick: () => {},
    commentText: 'comment text',
    onChange: () => {},
    buttonStatus: 'buttonStatus',
    isUserAuthenticated: true
  };
  it('should render an image tag, one text-area and two buttons', () => {
    const wrapper = shallow(<AddComment {...propsObj} />);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('#add-comment-text-area').length).toEqual(1);
    expect(wrapper.find('#add-comment-button').length).toEqual(1);
  });
  it('should disable textarea and tell the user to '
    + 'login if user is registered', () => {
    propsObj.isUserAuthenticated = false;
    const wrapper = shallow(<AddComment {...propsObj} />);
    expect(wrapper.find('#add-comment-button').length).toEqual(1);
    expect(wrapper.find('Button').prop('value')).toEqual('buttonStatus');
    expect(wrapper.find('textarea').find('[disabled=true]'));
  });
});
