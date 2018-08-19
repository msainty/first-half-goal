import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Intro from './components/Intro';
import FixtureList from './components/FixtureList';

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Intro />
    <FixtureList />
  </AppContainer>
);

export default App;
