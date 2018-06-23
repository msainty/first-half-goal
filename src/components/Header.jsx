import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const HeaderText = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderText>
      Welcome to First Half Goals
    </HeaderText>
  </HeaderContainer>
);

export default Header;
