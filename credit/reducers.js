import { combineReducers } from 'redux';
import home from './containers/Home/reducers';
import detail from './containers/Detail/reducers';

export default combineReducers({
  home,
  detail,
});
