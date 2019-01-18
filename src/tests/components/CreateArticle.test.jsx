import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CreateArticle from '../../components/CreateArticle';

describe('Unit test for create article component. ', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      onSave: () => {},
      publish: false,
      draft: false,
      createArticle: () => ({
        data: {
          id: '2f178830-3f11-4725-a512-c791a1874b18',
          title: 'My article',
          body: 'this is my article',
          description: 'No discription',
          image: null
        }
      })
    };
    wrapper = shallow(<CreateArticle {...props} />);
  });
  it('should render an form', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const state = {
      articles: {
        cache: {
          id: null,
          title: '',
          body: '',
          description: '',
          image: null
        }
      },
      flashMessages: [{
        id: 1.2,
        type: 'error',
        message: 'Invalid email'
      }, {
        id: 1.44,
        type: 'warning',
        message: 'Check your email'
      }]
    };
    const store = mockStore(state);
    wrapper = mount(
      <Provider store={store}>
        <CreateArticle {...props} />
      </Provider>
    );
    expect(wrapper.find('#article-container').length).toBe(1);
    wrapper.unmount();
  });
  it('it should create an article', () => {
    wrapper = shallow(<CreateArticle {...props} />);
    const instance = wrapper.instance();
    instance.setState({
      title: 'my data',
      body: 'my body'
    });
    wrapper.setProps({
      draft: true
    });
    expect(instance).toBeInstanceOf(CreateArticle);
  });
});
