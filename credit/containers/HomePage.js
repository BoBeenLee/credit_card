import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTest } from '../actions/actions';
import Home from '../components/Home';

const propTypes = {};
const defaultProps = {};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTest: () => dispatch(fetchTest())
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);