import React from 'react';
import Background from './Background';
import Container from './Container';
import spinner from './spinner.gif';

export default () => (
  <Background height="100vh">
    <Container>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </Container>
  </Background>
);
