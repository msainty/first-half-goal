// @flow
export type Fixture = {
    uuid: string,
    kickOff: string, // needs to be a moment
    country: string,
    league: string,
    status: number,
    homeTeam: string,
    awayTeam: string,
    played: number,
    noOfNoScoreFirstHalf: number,
    percentageOfAFirstGoalHome: number,
    percentageOfAFirstGoalAway: number,
    probability: number,
    price: number,
    matched: number, // market liquidity
    rating: number,
};

export type State = {
  +fixtures: Array<Fixture>,
  };

export type Action =
  | { type: 'firsthalfgoals/GET.OK', availableFixtures: Array<Fixture>}
  | { type: 'firsthalfgoals/GET.ERROR', error: string }
  | { type: 'firsthalfgoals/GET.FETCH' }
