import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, Image, Panel, Radio} from 'react-bootstrap';

const propTypes = {
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired,
  fetchProductItem: PropTypes.func.isRequired
};

const defaultProps = {};

class Detail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProductItem(id);
  }

  getPrices = prices => prices.map((price, index) => {
    return (<span key={price.id}>
      <Radio name="price" checked={ !index } value={ price.price } inline>
        {price.product}
      </Radio>
      {' '}
    </span>);
  });

  render() {
    const { title, content, prices } = this.props;
    console.log(title, content, prices);
    return (
      <div>
        <Panel header={ title } bsStyle="primary">
          <Image src="http://via.placeholder.com/300x300" responsive />
          { content }
          <FormGroup>
            { this.getPrices(prices) }
          </FormGroup>
          <div>
            <Button>Home</Button>
            <Button bsStyle="primary">Next</Button>
          </div>
        </Panel>
      </div>
    );
  }
}

Detail.propTypes = propTypes;
Detail.defaultProps = defaultProps;

export default Detail;