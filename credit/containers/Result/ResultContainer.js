import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Result from '../../components/Result/Result';
import { POST_REFUND } from '../Refund/sagas';

function mapStateToProps(state) {
  return {
    ...state.refund
  };
}

function mapDispatchToProps(dispatch) {
  return {
    paymentCancel: (merchantUid, reason, resolve, reject) => dispatch({
      type: POST_REFUND,
      payload: {
        merchantUid,
        reason,
        resolve,
        reject
      }
    })
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
  form: 'refund'
})(Result));