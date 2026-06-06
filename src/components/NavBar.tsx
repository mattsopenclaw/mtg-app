// src/components/NavBar.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${colors.BG};
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? colors.GOLD : colors.TEXT_SECONDARY)};
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Collection');

  const tabs = ['Collection', 'Decks', 'Locations', 'Wishlist'];

  return (
    <NavBarContainer>
      {tabs.map((tab) => (
        <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
          {tab}
        </Tab>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
