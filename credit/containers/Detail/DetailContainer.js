import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Detail from '../../components/Detail/Detail';
import { FETCH_PRODUCT_ITEM } from './sagas';

const propTypes = {};
const defaultProps = {};

function mapStateToProps(state) {
  return {
    ...state.detail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductItem: (id) => dispatch({ type: FETCH_PRODUCT_ITEM, id }),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);