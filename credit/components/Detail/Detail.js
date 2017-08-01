import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, ControlLabel, FormControl, FormGroup, HelpBlock, Image, Panel,
  Radio
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Field } from 'redux-form';
import _ from 'lodash';
import { Prev, Next } from '../Common';
import './Detail.scss';

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
  constructor(props) {
    super(props);
    this.renderPrices = this.renderPrices.bind(this);
  }

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
      {selectedPrice && <HelpBlock className="detail-price">금액 : {selectedPrice.price}</HelpBlock>}
    </FormGroup>);
  };

  render() {
    const { title, content, prices, handleSubmit } = this.props;

    return (
      <div className="detail">
        <Panel header={ title } bsStyle="primary">
          <form onSubmit={ handleSubmit }>
            <Image className="detail-image" src="http://via.placeholder.com/300x300" responsive rounded />
            <p className="detail-content">
              { content }
            </p>
            <Field
              name="price"
              prices={ prices }
              component={ this.renderPrices } />
            <div className="btn-box">
              <LinkContainer className="btn-prev" to="/">
                <Prev>이전</Prev>
              </LinkContainer>
              <Next className="btn-next" type="submit" bsStyle="primary">구매</Next>
            </div>
          </form>
        </Panel>
      </div>
    );
  }
}

Detail.propTypes = propTypes;
Detail.defaultProps = defaultProps;

export default Detail;