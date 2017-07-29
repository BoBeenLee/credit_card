import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTest } from './actions';
import Home from '../../components/Home/Home';
import { FETCH_SAGA_TEST, FETCH_PRODUCT_ITEMS } from './sagas';

const propTypes = {};
const defaultProps = {};

function mapStateToProps(state) {
  return {
    ...state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTest: () => dispatch(fetchTest()),
    fetchSagaTest: () => dispatch({ type: FETCH_SAGA_TEST }),
    fetchProductItems: () => dispatch({ type: FETCH_PRODUCT_ITEMS }),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);