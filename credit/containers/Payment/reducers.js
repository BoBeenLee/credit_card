import { POST_READY_PAYMENT, POST_PAYMENT_SUCCESS, POST_PAYMENT_FAIL } from './sagas';

const initialState = {
  redirectToReferrer: false,
  result: {},
  message: ''
};

const payment = (state = initialState, action) => {
  switch(action.type) {
    case POST_PAYMENT_SUCCESS:
      return {
        redirectToReferrer: true,
        result: {
          isSuccess: true,
          merchantUid: action.payload.merchantUid,
          user: action.payload.user,
          price: action.payload.price,
          cardNumber: action.payload.payment.cardNumber
        }
      };
    case POST_PAYMENT_FAIL:
      return {
        ...state,
        message: action.message
      };
    case POST_READY_PAYMENT:
      return initialState;
    default:
      return state;
  }
};

export default payment;