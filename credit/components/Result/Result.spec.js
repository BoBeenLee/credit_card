import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Result from './Result';

describe('<Result />', () => {
  it('render <Result /> component', () => {
    const wrapper = shallow(<Result
      handleSubmit={ () => false } />);
    expect(wrapper.find('form')).to.have.length(1);
  });
});