import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Intro from './components/Intro';

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Intro />
  </AppContainer>
);

export default App;
