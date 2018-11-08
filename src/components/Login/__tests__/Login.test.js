import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {LoginComponent} from '../Login';

describe('Login Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<LoginComponent />).find('div.login form').exists()).toBe(true)
  });

  it('renders a email input', () => {
    expect(shallow(<LoginComponent />).find('input[name="username"]').length).toEqual(1)
  });

  it('renders a password input', () => {
    expect(shallow(<LoginComponent />).find('input[name="password"]').length).toEqual(1)
  });
});