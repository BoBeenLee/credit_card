import { POST_READY_PAYMENT, POST_PAYMENT_SUCCESS, POST_PAYMENT_FAIL } from './sagas';

const initialState = {
  redirectToReferrer: false,
  result: {}
};

const payment = (state = initialState, action) => {
  switch(action.type) {
    case POST_PAYMENT_SUCCESS:
      return {
        redirectToReferrer: true,
        result: {
          isSuccess: true,
          user: action.payload.user,
          price: action.payload.price,
          cardNumber: action.payload.payment.cardNumber
        }
      };
    case POST_READY_PAYMENT:
    case POST_PAYMENT_FAIL:
    default:
      return state;
  }
};

export default payment;