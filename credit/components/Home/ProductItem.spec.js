import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ProductItem from './ProductItem';

describe('<ProductItem />', () => {
  it('render <ProductItem /> component', () => {
    const wrapper = shallow(<ProductItem />);
    expect(wrapper.find(Thumbnail)).to.have.length(1);
    expect(wrapper.find('h4')).to.have.length(1);
  });
});