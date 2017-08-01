import { call, fork, take, select, put, cancel, takeLatest } from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';
import _ from 'lodash';
import { callJsonApi } from '../../utils/apis';

export const POST_PAYMENT = 'POST_PAYMENT';
export const POST_READY_PAYMENT = 'POST_READY_PAYMENT';
export const POST_PAYMENT_SUCCESS = 'POST_PAYMENT_SUCCESS';
export const POST_PAYMENT_FAIL = 'POST_PAYMENT_FAIL';

function* postPayment({ payload: { price, user, payment } }) {
  put({ type: POST_READY_PAYMENT });

  try {
    // const response = yield call(callJsonApi, 'TODO');
    yield put({
      type: POST_PAYMENT_SUCCESS,
      payload: { price, user, payment }
    });
  } catch (err) {
    yield put({
      type: POST_PAYMENT_FAIL,
      message: err.message
    });
  }
}

export default function* rootSaga() {
  yield takeLatest(POST_PAYMENT, postPayment);
}