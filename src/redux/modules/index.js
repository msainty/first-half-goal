// @flow
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import type { State as FirstHalfGoalsState } from './firsthalfgoals/types';
import firstHalfGoalsReducer from './firsthalfgoals/reducers';
import firstHalfGoalsSagas from './firsthalfgoals/sagas';

export type State = {
  firstHalfGoals: FirstHalfGoalsState,
};

export const rootReducer = combineReducers({
  firstHalfGoals: firstHalfGoalsReducer,
});

export function* rootSaga(): Saga<void> {
  yield all([
    firstHalfGoalsSagas(),
  ]);
}
