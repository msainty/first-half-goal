// @flow
import type { Saga } from 'redux-saga';

import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchFixtureSuccess, fetchFixtureError } from './actions';
import * as actionTypes from './actionTypes';

export function* fetchFixtureSaga(): Saga<void> {
  try {
    const resp = yield call(fetch, 'https://voh2jldwd4.execute-api.eu-west-1.amazonaws.com/production');
    const data = yield resp.json();
    if (resp.status === 200) {
      yield put(fetchFixtureSuccess(data));
    } else {
      yield put(fetchFixtureError(data.message));
    }
  } catch (error) {
    yield put(fetchFixtureError(error.message));
  }
}

export default function* firstHalfGoalsSagas(): Saga<void> {
  yield takeEvery(actionTypes.GET.FETCH, fetchFixtureSaga);
}
