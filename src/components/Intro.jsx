import React from 'react';
import styled from 'styled-components';

const IntroText = styled.p`
  font-size: large;
`;

const Intro = () => (
  <IntroText>
    This page will list opportunities to bet on a goal being scored in the first half.
    The algorithm will try to find games where this is likely to happen.
  </IntroText>
);

export default Intro;
