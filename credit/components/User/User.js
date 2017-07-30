import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, ControlLabel, FormControl, FormGroup,
  HelpBlock
} from 'react-bootstrap';
import { Field } from 'redux-form';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

const defaultProps = {};

class User extends Component {
  componentDidMount() {}

  render() {
    const { previousPage, handleSubmit } = this.props;
    const FieldGroup = ({ input, meta, id, label, help, ...props }) => (
      <FormGroup controlId={ id }>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          { ...input }
          { ...props } />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
      );

    return (
      <div>
        <form onSubmit={ handleSubmit }>
          <h3>유저 정보 입력</h3>
          <Field
            id="name"
            name="name"
            type="text"
            label="이름"
            placeholder="BoBinLee"
            component={ FieldGroup } />
          <Field
            id="email"
            type="email"
            label="이메일"
            placeholder="example@example.com"
            component={ FieldGroup } />
          <Field
            id="phoneNumber"
            type="text"
            label="연락처"
            placeholder="010-1234-1234"
            component={ FieldGroup } />
          <div>
            <Button onClick={ previousPage }>이전</Button>
            <Button type="submit" bsStyle="primary">다음</Button>
          </div>
        </form>
      </div>
    );
  }
}

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;