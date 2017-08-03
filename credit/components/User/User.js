import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, ControlLabel, FormControl, FormGroup,
  HelpBlock
} from 'react-bootstrap';
import { Field } from 'redux-form';
import _ from 'lodash';
import normalizePhone from './normalizePhone';
import { required, maxLength, email } from '../validate';
import { Prev, Next } from '../Common';
import './User.scss';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

const defaultProps = {};

class User extends Component {
  constructor(props) {
    super(props);
    this.renderFieldGroup = this.renderFieldGroup.bind(this);
  }

  componentDidMount() {}

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
    const { previousPage, handleSubmit } = this.props;

    return (
      <div className="user">
        <form onSubmit={ handleSubmit }>
          <h3>유저 정보 입력</h3>
          <Field
            id="name"
            name="name"
            type="text"
            label="이름"
            placeholder="BoBinLee"
            component={ this.renderFieldGroup } />
          <Field
            id="email"
            name="email"
            type="email"
            label="이메일"
            placeholder="example@example.com"
            component={ this.renderFieldGroup } />
          <Field
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            label="연락처"
            placeholder="010-1234-1234"
            component={ this.renderFieldGroup }
            normalize={ normalizePhone } />
          <div className="btn-box">
            <Prev onClick={ previousPage }>이전</Prev>
            <Next type="submit" bsStyle="primary">다음</Next>
          </div>
        </form>
      </div>
    );
  }
}

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;