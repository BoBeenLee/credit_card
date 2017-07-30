import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormGroup, Image, Panel, Radio,
  ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

const defaultProps = {};

class Payment extends Component {
  componentDidMount() {}

  submit = ({ name, email, phoneNumber, cardNumber, validatedAt, birthDate, cardPassword }) => {

  };

  render() {
    const { previousPage, handleSubmit } = this.props;

    const FieldGroup = ({ id, label, help, ...props }) => (
      <FormGroup controlId={ id }>
        <ControlLabel>{label}</ControlLabel>
        <FormControl { ...props } />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
      );

    return (
      <form onSubmit={ handleSubmit(this.submit) }>
        <h3>Card Info</h3>
        <FieldGroup
          id="cardNumber"
          type="text"
          label="카드번호"
          placeholder="0000-1111-2222-3333" />
        <FieldGroup
          id="validatedAt"
          type="date"
          label="유효기간"
          placeholder="2011/01/01" />
        <FieldGroup
          id="birthDate"
          type="date"
          label="생년월일"
          placeholder="2011/01/01" />
        <FieldGroup
          id="cardPassword"
          type="password"
          label="카드비밀번호" />

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