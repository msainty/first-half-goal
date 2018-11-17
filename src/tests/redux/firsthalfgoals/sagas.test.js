// @flow

import SagaTester from 'redux-saga-tester';
import moment from 'moment';
import firstHalfGoalsSagas from '@redux/modules/firsthalfgoals/sagas';
import * as actionTypes from '@redux/modules/firsthalfgoals/actionTypes';
import { fetchFixtureRequest, fetchFixtureSuccess, fetchFixtureError } from '@redux/modules/firsthalfgoals/actions';
import firstHalfGoalsReducer, { initialState } from '@redux/modules/firsthalfgoals/reducers';

const fixtures = [{
  uuid: '1',
  kickOff: moment(),
  country: 'England',
  league: 'PL',
  status: 0.6,
  homeTeam: 'Manchester United',
  awayTeam: 'Brighton',
  played: 15,
  noOfNoScoreFirstHalf: 0,
  percentageOfAFirstGoalHome: 0.66,
  percentageOfAFirstGoalAway: 0.55,
  probability: 0.85,
  price: 1.35,
  matched: 344, // market liquidity
  rating: 5,
},
{
  uuid: '2',
  kickOff: moment(),
  country: 'Scotland',
  league: 'C',
  status: 0.7,
  homeTeam: 'Celtic',
  awayTeam: 'Dundee United',
  played: 18,
  noOfNoScoreFirstHalf: 0,
  percentageOfAFirstGoalHome: 0.5,
  percentageOfAFirstGoalAway: 0.5,
  probability: 0.5,
  price: 1.35,
  matched: 200, // market liquidity
  rating: 4,
}];

describe('firstHalfGoalsSaga Test', () => {
  let sagaTester;

  beforeEach(() => {
    sagaTester = new SagaTester({
      initialState: { firstHalfGoals: initialState },
      reducers: { firstHalfGoals: firstHalfGoalsReducer },
    });
    sagaTester.start(firstHalfGoalsSagas);
  });

  it('should retrieve data from the API and send a SUCCESS action if success', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(fixtures),
    }));

    sagaTester.dispatch(fetchFixtureRequest());

    await sagaTester.waitFor(actionTypes.GET.OK);

    expect(sagaTester.getLatestCalledAction()).toEqual(fetchFixtureSuccess(fixtures));
    expect(sagaTester.getState().firstHalfGoals.fixtures).toEqual(fixtures);
    expect(sagaTester.getState().firstHalfGoals.status).toEqual('ok');
  });

  it('should retrieve data from the server and send a ERROR action', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 400,
      ok: false,
      json: () => Promise.resolve({ message: 'error goes here...' }),
    }));

    sagaTester.dispatch(fetchFixtureRequest());
    await sagaTester.waitFor(actionTypes.GET.ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(fetchFixtureError('error goes here...'));
    expect(sagaTester.getState().firstHalfGoals.error).toEqual('error goes here...');
    expect(sagaTester.getState().firstHalfGoals.status).toEqual('error');
  });

  it('should fail to hit the server and send a ERROR action', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('error goes here...')));

    sagaTester.dispatch(fetchFixtureRequest());
    await sagaTester.waitFor(actionTypes.GET.ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(fetchFixtureError('error goes here...'));
    expect(sagaTester.getState().firstHalfGoals.error).toEqual('error goes here...');
    expect(sagaTester.getState().firstHalfGoals.status).toEqual('error');
  });
});
