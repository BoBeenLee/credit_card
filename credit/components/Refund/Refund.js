import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Prev } from '../Common/index';
import './Refund.scss';

const propTypes = {
  location: PropTypes.shape({
    state: {
      price: PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired
    }
  }).isRequired
};

const defaultProps = {};

class Refund extends Component {
  componentDidMount() {}

  render() {
    const { product, price } = this.props.location.state.price ||
    { product: '', price: '' };
    return (
      <div className="refund">
        <Panel>
          {product}, {price}원 결제 취소 완료 되었습니다.
          </Panel>
        <div className="btn-box">
          <LinkContainer to="/">
            <Prev>홈</Prev>
          </LinkContainer>
        </div>
      </div>
    );
  }
}

Refund.propTypes = propTypes;
Refund.defaultProps = defaultProps;

export default Refund;