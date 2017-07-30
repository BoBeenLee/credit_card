import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, ControlLabel, FormControl, FormGroup, HelpBlock, Image, Panel,
  Radio
} from 'react-bootstrap';
import { Field } from 'redux-form';
import _ from 'lodash';

const propTypes = {
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired,
  fetchProductItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const defaultProps = {};

class Detail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProductItem(id);
  }

  handleChange = (onChange, prices, e) => {
    const selectedPrice = _.first(_.filter(prices, price => price.product === e.target.value));
    onChange(selectedPrice);
  };

  renderPrices = ({ input, meta, prices, ...props }) => {
    const selectedPrice = _.first(_.filter(prices, price => price.product === input.value.product)) || meta.initial;
    const options = _.map(prices, price => (
      <option
        key={ price.product }
        value={ price.product }>
        { price.product }
      </option>
    ));
    return (<FormGroup controlId="formControlsSelect">
      <ControlLabel>가격 유형</ControlLabel>
      <FormControl
        name={ input.name }
        componentClass="select"
        placeholder="select"
        defaultValue={ selectedPrice && selectedPrice.product }
        onChange={ _.partial(this.handleChange, input.onChange, prices, _) }
        { ...props }>
        { options }
      </FormControl>
      {selectedPrice && <HelpBlock>금액 : {selectedPrice.price}</HelpBlock>}
    </FormGroup>);
  };

  render() {
    const { title, content, prices, handleSubmit } = this.props;

    return (
      <div>
        <Panel header={ title } bsStyle="primary">
          <form onSubmit={ handleSubmit }>
            <Image src="http://via.placeholder.com/300x300" responsive />
            { content }
            <Field
              name="price"
              prices={ prices }
              component={ this.renderPrices } />
            <Button type="submit" bsStyle="primary">Next</Button>
          </form>
        </Panel>
      </div>
    );
  }
}

Detail.propTypes = propTypes;
Detail.defaultProps = defaultProps;

export default Detail;