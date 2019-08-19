// @flow
import React, { Component } from 'react';
import { connect, type Dispatch } from 'react-redux';
import styled from 'styled-components';
import Fixture from '@components/Fixture';
import type { State as ReduxState } from '../redux/modules';
import type { Action, Fixture as FixtureType } from '../redux/modules/firsthalfgoals/types';
import { fetchFixtureRequest } from '../redux/modules/firsthalfgoals/actions';
import { getFixtures, getNoFixtures } from '../redux/modules/firsthalfgoals/selectors';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  fixtures: Array<FixtureType>,
  fetchFixtures: () => void,
  hasNoFixtures: boolean,
};

class FirstHalfGoals extends Component<Props> {
  componentDidMount() {
    const { fetchFixtures } = this.props;
    fetchFixtures();
  }

  render() {
    const { fixtures, hasNoFixtures } = this.props;
    return (
      <PageContainer>
        {hasNoFixtures && 'No fixtures today'}
        {!hasNoFixtures
        && Array.isArray(fixtures) && fixtures.map((fixture) => (
          <Fixture key={fixture.uuid} fixture={fixture} />
        ))}
      </PageContainer>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  hasNoFixtures: getNoFixtures(state.firstHalfGoals),
  fixtures: getFixtures(state.firstHalfGoals),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  fetchFixtures: () => dispatch(fetchFixtureRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstHalfGoals);
