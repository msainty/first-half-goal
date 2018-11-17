// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const IntroText = styled.p`
  font-size: large;
`;

type Props = {
  homeTeam: string,
};

class Fixture extends PureComponent<Props> {
  render() {
    const { homeTeam } = this.props;
    return (
      <IntroText>
        Home Team
        {homeTeam}
      </IntroText>
    );
  }
}

export default Fixture;
