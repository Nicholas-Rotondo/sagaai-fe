import React, { useState } from "react";
import styled from "styled-components";
<style>
@import url('https://fonts.cdnfonts.com/css/quesha');
</style>

interface FlexHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const FlexHeaderContainer = styled.div`
  color: white;
  transition: position 0.2s ease-in-out;
  position: sticky;
  top: 0;
  z-index: 10; /* Make sure the header is always on top of the other content */
  flex: 1;
  display: 'flex';
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #01081a;
  font-family: Quesha, sans-serif;
  height: 20px
`;

const FlexHeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const FlexHeaderSubtitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const FlexHeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FlexHeader: React.FC<FlexHeaderProps> = ({ title, subtitle, actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexHeaderContainer>
      <FlexHeaderTitle>{title}</FlexHeaderTitle>
      {subtitle && <FlexHeaderSubtitle>{subtitle}</FlexHeaderSubtitle>}
      {actions && <FlexHeaderActions>{actions}</FlexHeaderActions>}
    </FlexHeaderContainer>
  );
};

export default FlexHeader;
