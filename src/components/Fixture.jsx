// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import type { Fixture as FixtureType } from '../redux/modules/firsthalfgoals/types';

const FixtureContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemText = styled.div`
  margin-right: 10px;
`;

type Props = {
  fixture: FixtureType,
};

class Fixture extends PureComponent<Props> {
  render() {
    const { fixture } = this.props;
    return (
      <FixtureContainer>
        <ItemText>{fixture.kickOff}</ItemText>
        <ItemText>{fixture.country}</ItemText>
        <ItemText>{fixture.league}</ItemText>
        <ItemText>{fixture.homeTeam}</ItemText>
        <ItemText>{fixture.awayTeam}</ItemText>
        <ItemText>{fixture.played}</ItemText>
        <ItemText>{fixture.noOfNoScoreFirstHalf}</ItemText>
        <ItemText>{fixture.percentageOfAFirstGoalHome}</ItemText>
        <ItemText>{fixture.percentageOfAFirstGoalAway}</ItemText>
        <ItemText>{fixture.probability}</ItemText>
      </FixtureContainer>
    );
  }
}

export default Fixture;
