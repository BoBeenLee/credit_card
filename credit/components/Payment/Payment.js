import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Payment extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <div>Payment</div>
    );
  }
}

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default Payment;