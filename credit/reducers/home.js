import { FETCH_TEST } from '../actions/actions';

const initialState = {
};

const home = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TEST:
      console.log(FETCH_TEST);
    default:
      return state;
  }
};

export default home;