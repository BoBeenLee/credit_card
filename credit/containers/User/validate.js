import { required, email } from '../../components/validate';

const validate = values => {
  const errors = {
    name: required('name', values.name),
    email: required('email', values.email) || email(values.email),
    phoneNumber: required('phoneNumber', values.phoneNumber)
  };
  return errors;
};
export default validate;