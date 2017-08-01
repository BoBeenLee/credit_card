import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormGroup, Image, Panel, Radio,
  ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Field } from 'redux-form';
import _ from 'lodash';
import normalizeCardNumber from './normalizeCardNumber';
import normalizeCardPassword from './normalizeCardPassword';
import { Prev, Next } from '../Common';
import './Payment.scss';

const propTypes = {
  redirectToReferrer: PropTypes.bool.isRequired,
  result: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  postPayment: PropTypes.func.isRequired,
};

const defaultProps = {};

class Payment extends Component {
  constructor(props) {
    super(props);
    this.renderFieldGroup = this.renderFieldGroup.bind(this);
  }

  componentDidMount() {}

  submit = ({ price, name, email, phoneNumber, cardNumber, validatedAt, birthDate, cardPassword }) => {
    console.log(name, email, phoneNumber, cardNumber, validatedAt, birthDate, cardPassword);
    const user = {
      name, email, phoneNumber
    };
    const payment = {
      cardNumber,
      validatedAt,
      birthDate,
      cardPassword
    };
    this.props.postPayment(price, user, payment);
  };

  renderFieldGroup({ input, meta: { touched, error }, id, label, ...props }) {
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
    const { redirectToReferrer, result, previousPage, handleSubmit } = this.props;

    if (redirectToReferrer) {
      return (
        <Redirect to={ {
          pathname: '/result',
          result
        } } />);
    }
    return (
      <form className="payment" onSubmit={ handleSubmit(this.submit) }>
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
          label="카드비밀번호(앞두자리)"
          component={ this.renderFieldGroup }
          normalize={ normalizeCardPassword } />
        <div className="btn-box">
          <Prev onClick={ previousPage }>이전</Prev>
          <Next type="submit" bsStyle="primary">결제</Next>
        </div>
      </form>
    );
  }
}

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default Payment;