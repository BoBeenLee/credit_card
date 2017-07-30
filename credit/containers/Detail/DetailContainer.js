import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
import Detail from '../../components/Detail/Detail';
import { FETCH_PRODUCT_ITEM } from './sagas';

function mapStateToProps(state) {
  const defaultPrice = _.first(state.detail.prices);
  return {
    initialValues: {
      price: defaultPrice
    },
    ...state.detail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductItem: id => dispatch({ type: FETCH_PRODUCT_ITEM, id })
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
  form: 'credit',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true
})(Detail));