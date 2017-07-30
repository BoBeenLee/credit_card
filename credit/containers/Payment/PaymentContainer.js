import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Payment from '../../components/Payment/Payment';

const propTypes = {};
const defaultProps = {};

function mapStateToProps(state) {
  return {
    ...state.payment
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
  form: 'credit',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Payment));