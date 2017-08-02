import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './containers/Home/reducers';
import detail from './containers/Detail/reducers';
import user from './containers/User/reducers';
import payment from './containers/Payment/reducers';
import refund from './containers/Refund/reducers';

export default combineReducers({
  home,
  detail,
  user,
  payment,
  refund,
  form: formReducer
});
