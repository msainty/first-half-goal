// @flow
import type { Saga } from 'redux-saga';

import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchFixtureSuccess, fetchFixtureError } from './actions';
import * as actionTypes from './actionTypes';

export function* fetchFixtureSaga(): Saga<void> {
  try {
    const resp = yield call(
      fetch,
      'http://localhost:5001/',
    );
    if (resp.status === 200) {
      const fixtures = yield resp.json();
      yield put(fetchFixtureSuccess(fixtures));
    } else {
      yield put(fetchFixtureError(resp.message));
    }
  } catch (error) {
    yield put(fetchFixtureError(error.message));
  }
}

export default function* firstHalfGoalsSagas(): Saga<void> {
  yield takeEvery(actionTypes.GET.FETCH, fetchFixtureSaga);
}
