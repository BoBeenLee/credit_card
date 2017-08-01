import { required, maxLength } from '../../components/validate';
import _ from 'lodash';

const validate = values => {
  const errors = {
    cardNumber: required('cardNumber', values.cardNumber),
    validatedAt: required('validatedAt', values.validatedAt),
    birthDate: required('birthDate', values.birthDate),
    cardPassword: required('cardPassword', values.cardPassword) ||
    maxLength(2)(values.cardPassword),
  };
  return errors;
};
export default validate;