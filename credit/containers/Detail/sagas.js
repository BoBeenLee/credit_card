import { call, fork, take, select, put, cancel, takeLatest } from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';
import _ from 'lodash';
import { callJsonApi } from '../../utils/apis';

export const FETCH_PRODUCT_ITEM = 'FETCH_PRODUCT_ITEM';
export const FETCH_PRODUCT_ITEM_SUCCESS = 'FETCH_PRODUCT_ITEM_SUCCESS';
export const FETCH_PRODUCT_ITEM_FAIL = 'FETCH_PRODUCT_ITEM_FAIL';

function* fetchProductItems(action) {
  const responseItems = yield call(callJsonApi, '/json/productItems.json');
  const item = _.first(
      _.filter(responseItems.data, item => item.id == action.id));
  const responsePrices = yield call(callJsonApi, '/json/productPrices.json');
  yield put({
    type: FETCH_PRODUCT_ITEM_SUCCESS,
    payload: { item, prices: responsePrices.data },
  });
}

export default function* rootSaga() {
  yield takeLatest(FETCH_PRODUCT_ITEM, fetchProductItems);
}