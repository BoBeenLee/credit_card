import { FETCH_PRODUCT_ITEM_SUCCESS, FETCH_PRODUCT_ITEM_FAIL } from './sagas';

const initialState = {
  title: '',
  content: '',
  prices: []
};

const detail = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCT_ITEM_SUCCESS:
      return { ...action.payload.item, prices: action.payload.prices };
    case FETCH_PRODUCT_ITEM_FAIL:
    default:
      return state;
  }
};

export default detail;