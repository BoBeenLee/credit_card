import React from 'react';
import { Field } from 'redux-form';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import User from './User';

describe('<User />', () => {
  it('render <User /> component', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find(Field)).to.have.length(3);
  });
});