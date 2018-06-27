import React from 'react';
import styled from 'styled-components';
import colors from '@config/colors';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${colors.headerBackground};
  height: 30px;
  color: white;
  font-size: 16px;
`;

const MenuItemContainer = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  padding: 0px 20px 0px 20px;
  vertical-align: middle;
  line-height: 30px
`;

const Header = () => (
  <HeaderContainer>
    <MenuItem>
      Welcome to First Half Goals
    </MenuItem>
    <MenuItemContainer>
      <MenuItem>
        Statistics
      </MenuItem>
      <MenuItem>
        Strategies
      </MenuItem>
    </MenuItemContainer>
    <MenuItemContainer>
      <MenuItem>
        Login
      </MenuItem>
    </MenuItemContainer>
  </HeaderContainer>
);

export default Header;
