// @flow
import moment from 'moment';
import firstHalfGoalsReducer, { initialState } from '@redux/modules/firsthalfgoals/reducers';
import { fetchFixtureRequest, fetchFixtureSuccess, fetchFixtureError } from '@redux/modules/firsthalfgoals/actions';

const fixtures = [{
  uuid: '1',
  kickOff: moment('2017-02-01'),
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
  kickOff: moment('2017-02-01'),
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

describe('firstHalfGoals reducer', () => {
  it('should handle GET.FETCH', () => {
    const action = fetchFixtureRequest();
    const newState = firstHalfGoalsReducer(initialState, action);
    expect(newState).toEqual({
      fixtures: [],
      status: 'processing',
    });
  });
  it('should handle GET.OK', () => {
    const action = fetchFixtureSuccess(fixtures);
    const newState = firstHalfGoalsReducer(initialState, action);

    expect(newState).toEqual({
      fixtures,
      status: 'ok',
    });
  });
  it('should handle GET.ERROR', () => {
    const error = 'oh damn';

    const action = fetchFixtureError(error);
    const newState = firstHalfGoalsReducer(initialState, action);

    expect(newState).toEqual({
      fixtures: [],
      status: 'error',
      error: 'oh damn',
    });
  });
  it('should handle unknown action', () => {
    const action = {
      type: 'UNKNOWN',
    };
    // $FlowFixMe
    const newState = firstHalfGoalsReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
