import React from 'react';
import { Panel } from 'react-bootstrap';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Refund from './Refund';


describe('<Refund />', () => {
  it('render <Refund /> component', () => {
    const wrapper = shallow(<Refund location={ { state: { prices: {} } } } />);
    expect(wrapper.find(Panel)).to.have.length(1);
  });
});