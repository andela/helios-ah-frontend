import React from 'React';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';
describe('Render Submit button', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      submitDetails: jest.fn(),
      isRequestSent: true,
      buttonValue: 'SIGNUP',
      idAttribute: 'btn-test',
      buttonClass: 'btn',
      columnAttribute: 'signup-col'
    }
    wrapper = shallow(<SubmitButton {...props} />)
  })

  it('it should render submit button', () => {
    expect(wrapper).toMatchSnapshot();
  });
});