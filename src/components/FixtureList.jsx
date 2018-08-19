// @flow

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const headers = [{
  id: 'kickOff',
  Header: 'Kick Off',
  accessor: (d) => {
    moment(d.kickOff).format('hh:mm');
  },
},
{ Header: 'Country', accessor: 'country' },
{ Header: 'League', accessor: 'league' },
{ Header: 'Status', accessor: 'status' },
{ Header: 'Home Team', accessor: 'homeTeam' },
{ Header: 'Away Team', accessor: 'awayTeam' },
{ Header: 'Played', accessor: 'played' },
{ Header: '0-0', accessor: 'noOfNoScoreFirstHalf' },
{ Header: 'H1', accessor: 'percentageOfAFirstGoalHome' },
{ Header: 'A1', accessor: 'percentageOfAFirstGoalAway' },
{ Header: 'Probablility', accessor: 'probability' },
{ Header: 'Price', accessor: 'price' },
{ Header: 'Matched', accessor: 'matched' },
{ Header: 'Rating', accessor: 'rating' }];

const fixtures = [{
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

const FixtureList = () => (
  <Container>
    <ReactTable data={fixtures} columns={headers} />
  </Container>
);

export default FixtureList;
