import { call, fork, take, select, put, cancel, takeLatest } from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';
import { callJsonApi } from '../../utils/apis';

export const FETCH_SAGA_TEST = 'FETCH_SAGA_TEST';

function* fetchSagaTest() {
  yield call(delay, 1000);
  console.log('hello Saga');
}

export const FETCH_PRODUCT_ITEMS = 'FETCH_PRODUCT_ITEMS';
export const FETCH_PRODUCT_ITEMS_SUCCESS = 'FETCH_PRODUCT_ITEMS_SUCCESS';
export const FETCH_PRODUCT_ITEMS_FAIL = 'FETCH_PRODUCT_ITEMS_FAIL';


function* fetchProductItems(action) {
  const responseItems = yield call(callJsonApi, '/json/productItems.json');
  console.log(responseItems);
  yield put({
    type: FETCH_PRODUCT_ITEMS_SUCCESS,
    payload: { items: responseItems.data },
  });
}

export default function* rootSaga() {
  yield takeEvery(FETCH_SAGA_TEST, fetchSagaTest);
  yield takeLatest(FETCH_PRODUCT_ITEMS, fetchProductItems);
}