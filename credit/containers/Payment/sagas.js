import { call, fork, take, select, put, cancel, takeLatest } from 'redux-saga/effects';
import { takeEvery, delay } from 'redux-saga';
import _ from 'lodash';
import { callJsonApi, paymentOneTime, sendEmail } from '../../utils/apis';

export const POST_PAYMENT = 'POST_PAYMENT';
export const POST_READY_PAYMENT = 'POST_READY_PAYMENT';
export const POST_PAYMENT_SUCCESS = 'POST_PAYMENT_SUCCESS';
export const POST_PAYMENT_FAIL = 'POST_PAYMENT_FAIL';

function* postPayment({ payload: { price, user, payment, resolve, reject } }) {
  yield put({ type: POST_READY_PAYMENT });
  try {
    const response = yield call(callJsonApi, '/json/oneTime.json'); // call(paymentOneTime, price, user, payment);
    console.log(response);
    yield put({
      type: POST_PAYMENT_SUCCESS,
      payload: {
        merchantUid: response.data.response['merchant_uid'],
        price,
        user,
        payment
      }
    });
    yield call(sendEmail, user.email, user.name, price);
    resolve();
  } catch (err) {
    yield put({
      type: POST_PAYMENT_FAIL,
      message: err.message
    });
    reject();
  }
}

export default function* rootSaga() {
  yield takeLatest(POST_PAYMENT, postPayment);
}