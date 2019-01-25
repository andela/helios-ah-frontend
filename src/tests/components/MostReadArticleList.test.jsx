import React from 'react';
import { shallow } from 'enzyme';
import MostReadArticleList from '../../components/MostReadArticleList';

describe('Unit test for the most read articles component', () => {
  it('should mount the most read article component', () => {
    const propsObj= {
      articles: [
        {
          id: '34543',
          title:'some title',
          body: 'some body content',
          readTime: '2 mins',
          User: {
            firstName: 'juwon',
            lastName: 'kemi',
          }
        },
      ],
    }
    const wrapper = shallow(<MostReadArticleList {...propsObj} />);
    expect(wrapper.find('MostReadArticle').length).toEqual(1);
    expect(wrapper.find('.text-center').text()).toEqual('Most Read Articles');
  });
});