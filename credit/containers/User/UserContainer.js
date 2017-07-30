import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import User from '../../components/User/User';
import validate from './validate';

function mapStateToProps(state) {
  return {
    ...state.user
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
  forceUnregisterOnUnmount: true,
  validate
})(User));