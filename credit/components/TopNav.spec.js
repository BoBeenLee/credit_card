import React from 'react';
import { Field } from 'redux-form';
import { Navbar } from 'react-bootstrap';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TopNav from './TopNav';


describe('<TopNav />', () => {
  it('render <TopNav /> component', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find(Navbar)).to.have.length(1);
  });
});