import { call, fork, take, select, put, cancel, takeLatest } from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';
import _ from 'lodash';
import { callJsonApi, paymentCancel } from '../../utils/apis';

export const POST_REFUND = 'POST_REFUND';
export const POST_READY_REFUND = 'POST_READY_REFUND';
export const POST_REFUND_SUCCESS = 'POST_REFUND_SUCCESS';
export const POST_REFUND_FAIL = 'POST_REFUND_FAIL';

function* postRefund({ payload: { merchantUid, reason, resolve, reject } }) {
  yield put({ type: POST_READY_REFUND });
  try {
    const response = yield call(callJsonApi, '/json/oneTime.json');  // yield call(paymentCancel, merchantUid, reason);
    yield put({
      type: POST_REFUND_SUCCESS,
      payload: {}
    });
    resolve();
  } catch (err) {
    yield put({
      type: POST_REFUND_FAIL,
      message: err.message
    });
    reject();
  }
}

export default function* rootSaga() {
  yield takeLatest(POST_REFUND, postRefund);
}