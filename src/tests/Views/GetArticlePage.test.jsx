import React from 'react';
import { shallow } from 'enzyme';
import { GetArticlePage, mapStateToProps } from '../../views/GetArticlePage';

let wrapper;

describe('Render GetArtice Page ', () => {
  let instance;
  beforeAll(() => {
    const props = {
      match: {
        params: {
          id: '2dueeuu2u2'
        }
      },
      getArticle: () => null,
      fetchedArticle: {},
      isWriter: false
    };
    wrapper = shallow(<GetArticlePage {...props} />);
    instance = wrapper.instance();
  });
  it('renders one get article page', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  describe('methods called', () => {
    it('should change prevState when the handleEllipsisClick method is called',
      () => {
        instance.setState({ showEllipsisDropdown: false });
        instance.handleEllipsisClick();
        expect(wrapper.state().showEllipsisDropdown).toEqual(true);
      });
    it('renders GetArticle component if fetchedArticle props is not empty',
      () => {
        wrapper.setProps({
          fetchedArticle: {
            title: 'mytitle',
            body: 'myTestBody',
            description: 'myTestDescription',
            image: 'My test image'
          }
        });
        expect(wrapper.find('GetArticle').length).toBe(1);
      });
    it('should show previous fetchedArticle state', () => {
      const state = {
        articles: {
          article: {
            title: 'mytitle',
            body: 'myTestBody',
            description: 'myTestDescription',
            image: 'My test image'
          }
        }
      };
      expect(mapStateToProps(state).fetchedArticle).toEqual({
        title: 'mytitle',
        body: 'myTestBody',
        description: 'myTestDescription',
        image: 'My test image'
      });
    });
  });
});
