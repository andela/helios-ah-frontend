import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import Profile from '../../components/Profile';
import { editFields } from '../../actions/profileActions';
import { triggerAsyncId } from 'async_hooks';

const { expect } = chai;


describe('Unit test for Profile component', () => {
    const propsObject = {
        userInfo: {},
        handleSubmitUpdate: () => {},
        buttonValue: () => {},
        userEditFields: {},
        upLoadImageHandler: () => {},
        displayFileHandler: () => {},
        userInfo: {},
        handleInputChange: () => {},
        handleCancelUpdate: () => {},
    }

    it('it shoould have an header', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const titleHeader = wrapper.find('.title-header');
        expect(titleHeader.length).to.equal(1);
      });
    it('it shoould have two buttons', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const buttons = wrapper.find('button');
        expect(buttons.length).to.equal(2);
    });
    it('it shoould have an img tag for user aarter', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const image = wrapper.find('img');
        expect(image.length).to.equal(1);
    });
    it('it shoould have a camera icon for changing user image', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const faCamera = wrapper.find('.fa-camera');
        expect(faCamera.length).to.equal(1);
    });
    it('it shoould have 3 input fields', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const input = wrapper.find('input');
        expect(input.length).to.equal(3);
    });
    it('it shoould have an h5 header for displaying fullname', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const h5 = wrapper.find('h5');
        expect(h5.length).to.equal(1);
    });
    it('it shoould have one textarea for bio', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const bio = wrapper.find('textarea');
        expect(bio.length).to.equal(1);
    });
    it('it shoould have no of published articles section', () => {
        const wrapper = shallow(<Profile {...propsObject} />);
        const publish = wrapper.find('.no-of-publish');
        expect(publish.length).to.equal(1);
    });
});
