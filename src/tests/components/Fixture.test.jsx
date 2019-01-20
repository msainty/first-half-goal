import React from 'react';
import ReactDOM from 'react-dom';
import Fixture from '@components/Fixture';

const fixture = {
  uuid: '1',
  kickOff: '2019-01-02',
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
  matched: 344,
  rating: 5,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fixture fixture={fixture} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
