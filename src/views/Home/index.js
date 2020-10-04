import React from 'react';

import { Container, Wrapper } from './styles';

/* Components */
import Product from '../../components/Product'

function Home() {
  return (
      <Container>
        <Wrapper>
          <Product />
        </Wrapper>
      </Container>
  );
}

export default Home;