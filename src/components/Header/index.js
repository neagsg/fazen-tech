import React from 'react';
import { Container, HeaderTitle } from './styles';

const Header = ({ title, childen }) => {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

export default Header;
