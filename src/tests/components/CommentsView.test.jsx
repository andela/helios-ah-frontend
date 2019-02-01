import React from 'react';
import { mount } from 'enzyme';
import {
  CommentsView,
  mapStateToProps,
  mapDispatchToProps
} from '../../views/CommentsView';

describe('Unit test for the comments view components', () => {
  const propsObj = {
    history: {
      path: 'history',
      push: jest.fn(),
    },
    isUserAuthenticated: false,
    createComment: () => {},
    match: {
      params: 'match',
    },
  };

  it('should set button status to "Login to comment"'
  + ' if user is not registered', () => {
    const wrapper = mount(<CommentsView {...propsObj} />);
    expect(wrapper.find('Conversation').length).toEqual(1);
    expect(wrapper.find('Conversation').find('p').text())
      .toEqual('Conversation(4)');
    expect(wrapper.state('buttonStatus')).toEqual('Login to comment');
  });

  it('should update the state when a user types in the textarea', () => {
    const wrapper = mount(<CommentsView {...propsObj} />);
    wrapper.find('textarea')
      .simulate('change', { target: { value: 'custom' } });
    expect(wrapper.state('commentText')).toEqual('custom');
  });

  it('should map the correct state to prop', () => {
    const appState = { currentUser: { isAuthenticated: false } };
    const expectedState = {
      isUserAuthenticated: appState.currentUser.isAuthenticated
    };
    const componentState = mapStateToProps(appState);
    expect(componentState).toEqual(expectedState);
  });

  it('should map the correct dispatch to prop', () => {
    const mockDispatch = jest.fn();
    mapDispatchToProps(mockDispatch).createComment({});
    expect(mockDispatch.mock.calls.length).toBe(1);
  });

  it('should send a user to the login page if the user '
   + 'clicks on the button and that user is unauthorized', () => {
    const wrapper = mount(<CommentsView {...propsObj} />);
    wrapper.find('button').simulate('click');
    expect(propsObj.history.push.mock.calls.length).toBe(1);
  });

  it('should update the state when an authorized user '
    + 'creates a comment', () => {
    propsObj.isUserAuthenticated = true;
    propsObj.createComment = jest
      .fn().mockImplementation(() => Promise.resolve());
    const wrapper = mount(<CommentsView {...propsObj} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isRequestSent')).toEqual(true);
    expect(wrapper.state('buttonStatus')).toEqual('Creating Comment...');
  });

  it('should reinitialize the state when an authorized user '
    + 'could not create a comment', async () => {
    propsObj.isUserAuthenticated = true;
    propsObj.createComment = jest
      .fn().mockImplementation(() => Promise.reject());
    const wrapper = mount(<CommentsView {...propsObj} />);
    await wrapper.find('button').simulate('click');
    expect(wrapper.state('isRequestSent')).toEqual(true);
    expect(wrapper.state('buttonStatus')).toEqual('Creating Comment...');
    expect(propsObj.createComment.mock.calls.length).toEqual(1);
  });
});
