import React from 'React';
import { shallow } from 'enzyme'
import TextFieldGroup from '../../components/TextFieldGroup'

describe('Render text input field', () => {
  let wrapper
  beforeAll(() => {
    const props = {
      field: 'name',
      value: '',
      error: 'Password not found',
      type: 'text',
      onChange: () => {
        console.log("I have changed")
      }
    }
    wrapper = shallow(<TextFieldGroup {...props} />)
  })
  it('renders one text input field', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  describe('', () => {
    it('renders the right feedback class when there are errors', () => {
      wrapper.setProps({ error: 'Invalid name' })
      expect(wrapper.find('.invalid-feedback').length).toBe(1);
    });
    it('renders the right feedback class when there are no errors', () => {
      wrapper.setProps({ error: '' })
      expect(wrapper.find('.valid-feedback').length).toBe(1);
    });
    it('renders the right input classname when there are errors', () => {
      wrapper.setProps({ error: 'Invalid name' })
      expect(wrapper.find('.is-invalid').length).toBe(1);
    });
    it('renders the right input classname when there are no errors', () => {
      wrapper.setProps({ error: '', value: '5' })
      expect(wrapper.find('.is-valid').length).toBe(1);
    });
  });
});
