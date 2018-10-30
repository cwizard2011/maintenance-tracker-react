import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../src/components/Modal';

const props = {
  onClose: jest.fn()
};
describe('Modal', () => {
  it('not render Modal', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should display modal on click', () => {
    const wrapper = shallow(<Modal {...props} />);
    const instance = wrapper.instance();
    instance.onClose();
    expect(props.onClose).toHaveBeenCalled();
  });
  it('should render modal correctly', () => {
    const newProps = {
      ...props,
      show: true,
      children: 'new'
    };
    const wrapper = shallow(<Modal {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(3);
  });
});
