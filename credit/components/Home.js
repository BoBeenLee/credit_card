import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fetchTest: PropTypes.func.isRequired
};

const defaultProps = {};

class Home extends Component {
  componentDidMount() {
    this.props.fetchTest();
  }

  render() {
    return (
      <div>Home</div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;