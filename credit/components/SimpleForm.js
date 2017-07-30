import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class SimpleForm extends Component {

  // locationInput({input, meta: { touched, error }, ...custom}) {
  //   const hasError = touched && error !== undefined;
  //   return (
  //       <div>
  //         { hasError && <Message
  //                         error
  //                         header='Error'
  //                         content={error} /> }
  //         <Input
  //           error={hasError}
  //           fluid
  //           placeholder='Location...'
  //           {...input}
  //           {...custom} />
  //       </div>
  //   )
  // }
  //
  // submit = () => {
  //   // this
  // }
  //
  // render() {
  //   const { handleSubmit } = this.props;
  //
  //   return (
  //       <form onSubmit={this.submit}>
  //         <Field name='location' component={this.locationInput} />
  //         <br/>
  //         <button type="submit">Submit</button>
  //       </form>
  //   );
  // }
}

const validate = ({ location }) => {
  const errors = {};
  if(!location || location.trim() === '') {
    errors.location = 'Location required';
  }
  return errors;
};


SimpleForm.propTypes = propTypes;
SimpleForm.defaultProps = defaultProps;

export default reductForm({ form: 'simple' })(SimpleForm);