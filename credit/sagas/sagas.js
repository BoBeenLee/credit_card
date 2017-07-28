import { call, fork, take, select, put, cancel } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

export const FETCH_SAGA_TEST = 'FETCH_SAGA_TEST';

function* fetchSagaTest() {
  yield call(delay, 1000);
  console.log('hello Saga');
}

export default function* rootSaga() {
  yield takeEvery(FETCH_SAGA_TEST, fetchSagaTest);
}
