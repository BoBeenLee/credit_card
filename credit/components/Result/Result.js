import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Result extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <div>Result</div>
    );
  }
}

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default Result;