import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Image, Panel, Radio, Thumbnail} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const defaultProps = {
};

const ProductItem = props => {
  const { title } = props;

  return (
    <div>
      <Thumbnail src="http://via.placeholder.com/300x300" alt="242x200">
        <h4>{title}</h4>
      </Thumbnail>
    </div>
  );
};

ProductItem.propTypes = propTypes;
ProductItem.defaultProps = defaultProps;

export default ProductItem;