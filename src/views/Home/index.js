import React from 'react';

import { Container, Wrapper } from './styles';

/* Components */
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

function Home() {
  return (
      <Container>
        <Header />
        <Wrapper>
          <Product />
        </Wrapper>
        <Footer />
      </Container>
  );
}

export default Home;