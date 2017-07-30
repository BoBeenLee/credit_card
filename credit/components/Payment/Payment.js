import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormGroup, Image, Panel, Radio,
  ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';
import { Field } from 'redux-form';
import _ from 'lodash';
import normalizeCardNumber from './normalizeCardNumber';
import { required, maxLength, email } from '../validate';


const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

const defaultProps = {};

class Payment extends Component {
  constructor(props) {
    super(props);
    this.renderFieldGroup = this.renderFieldGroup.bind(this);
  }

  componentDidMount() {}

  submit = ({ name, email, phoneNumber, cardNumber, validatedAt, birthDate, cardPassword }) => {

  };

  renderFieldGroup({ input, meta: { touched, error }, id, label, ...props }) {
    console.log('dsd');
    return (
      <FormGroup controlId={ id }>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          { ...input }
          { ...props } />
        {touched && error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    );
  }

  render() {
    const { previousPage, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.submit) }>
        <h3>Card Info</h3>
        <Field
          id="cardNumber"
          name="cardNumber"
          type="text"
          label="카드번호"
          placeholder="0000-1111-2222-3333"
          component={ this.renderFieldGroup }
          normalize={ normalizeCardNumber } />
        <Field
          id="validatedAt"
          name="validatedAt"
          type="date"
          label="유효기간"
          placeholder="2011/01/01"
          component={ this.renderFieldGroup } />
        <Field
          id="birthDate"
          name="birthDate"
          type="date"
          label="생년월일"
          placeholder="2011/01/01"
          component={ this.renderFieldGroup } />
        <Field
          id="cardPassword"
          name="cardPassword"
          type="password"
          label="카드비밀번호"
          component={ this.renderFieldGroup } />

        <div>
          <Button onClick={ previousPage }>이전</Button>
          <Button type="submit" bsStyle="primary">결제</Button>
        </div>
      </form>
    );
  }
}

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default Payment;