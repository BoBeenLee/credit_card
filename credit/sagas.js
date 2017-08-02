import { call, fork, take, select, put, cancel } from 'redux-saga/effects';
import homeSagas from './containers/Home/sagas';
import detailSagas from './containers/Detail/sagas';
import paymentSagas from './containers/Payment/sagas';
import refundSagas from './containers/Refund/sagas';

export default function* rootSaga() {
  yield [
    fork(homeSagas),
    fork(detailSagas),
    fork(paymentSagas),
    fork(refundSagas)];
}
