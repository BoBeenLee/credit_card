import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Panel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ProductItem from './ProductItem';

const propTypes = {
  items: PropTypes.array.isRequired,
  fetchProductItems: PropTypes.func.isRequired,
};

const defaultProps = {
};

class Home extends Component {
  componentDidMount() {
    this.props.fetchProductItems();
  }

  render() {
    const { items } = this.props;

    const productItems = _.chunk(items, 3).map(
        (partitionItems, index) =>
            (<Row key={ `row${index}` }>
              { partitionItems.map((item, index) =>
                (<Col key={ item.id } md={ 4 }>
                  <Link to={`/detail/${item.id}`}>
                    <ProductItem { ...item } />
                  </Link>
                </Col>))}
            </Row>));
    return (
      <Grid>
        { productItems }
      </Grid>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;