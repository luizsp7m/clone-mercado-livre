import React from 'react';

import { Container, Wrapper } from './styles';

/* Components */
import Header from '../../components/Header';
import Product from '../../components/Product';

function Home() {
  return (
      <Container>
        <Header />
        <Wrapper>
          <Product />
        </Wrapper>
      </Container>
  );
}

export default Home;