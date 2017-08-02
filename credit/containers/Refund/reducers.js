import { POST_READY_REFUND, POST_REFUND_SUCCESS, POST_REFUND_FAIL } from './sagas';

const initialState = {
  message: ''
};

const refund = (state = initialState, action) => {
  switch(action.type) {
    case POST_REFUND_SUCCESS:
      return state;
    case POST_REFUND_FAIL:
      return {
        ...state,
        message: action.message
      };
    case POST_READY_REFUND:
      return initialState;
    default:
      return state;
  }
};

export default refund;