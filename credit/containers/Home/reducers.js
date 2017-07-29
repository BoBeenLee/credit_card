import { FETCH_TEST } from './actions';
import { FETCH_PRODUCT_ITEMS_SUCCESS } from './sagas';

const initialState = {
  items: [],
  prices: []
};

const home = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCT_ITEMS_SUCCESS:
      return { items: action.payload.items, prices: action.payload.prices };
    case FETCH_TEST:
    default:
      return state;
  }
};

export default home;