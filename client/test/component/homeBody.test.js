import React from 'react';
import { shallow } from 'enzyme';
import HomeBody from '../../src/components/HomeBody';

describe('Home Body', () => {
  it('render homeBody form correctly', () => {
    const wrapper = shallow(<HomeBody />);
    expect(wrapper).toMatchSnapshot();
  });
  it('show signUp modal', () => {
    const wrapper = shallow(<HomeBody />);
    const instance = wrapper.instance();
    instance.showSignup();
    expect(wrapper.state().signup).toEqual(true);
  });
  it('show login modal', () => {
    const wrapper = shallow(<HomeBody />);
    const instance = wrapper.instance();
    instance.showLoginModal();
    expect(wrapper.state().login).toEqual(true);
  });
});
