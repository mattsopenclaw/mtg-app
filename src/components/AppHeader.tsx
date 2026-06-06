// src/components/AppHeader.tsx

import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const HeaderContainer = styled.div`
  background-color: ${colors.BG};
  color: ${colors.TEXT_PRIMARY};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
`;

const Icon = styled.span`
  font-size: 1.5em;
  cursor: pointer;
`;

const AppHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>MTG Collection</Title>
      <Icon>⚙️</Icon>
    </HeaderContainer>
  );
};

export default AppHeader;
