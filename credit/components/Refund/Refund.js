import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Refund extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <div>Refund</div>
    );
  }
}

Refund.propTypes = propTypes;
Refund.defaultProps = defaultProps;

export default Refund;