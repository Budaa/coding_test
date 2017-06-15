import React from 'react';
import Container from './Container'
import Logo from './Logo';

const BankButton = ( { src, alt } ) => (
  <Container>
    <Logo {...{ src, alt }}></Logo>
  </Container>
);

export default BankButton;
