import React from 'react';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

/* Components */
import SellerInfo from '../SellerInfo';
import Payment from '../Payment';
import Action from '../Action';

function Product() {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="Product" src="https://www.amd.com/system/files/styles/992px/private/11157-ryzen-5-pib-left-facing-1260x709.png?itok=CpyMqf0f" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <Action />
          <SellerInfo />
          <WarrantySection />
          <Payment />
        </Column>
      </Panel>
    </Container>
  );
}

const Info = () => (
  <Description>
    <h2>Descrição: </h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget risus pharetra, vulputate metus ut, fermentum ligula. Etiam tempor, ante non viverra posuere, lacus augue posuere nisi, convallis auctor nisl mi in enim. Nullam vitae consectetur est. Nam sollicitudin tellus ut mi aliquam, id fringilla libero mollis. Maecenas suscipit vitae tellus eu pharetra. Sed vel dui orci. Proin semper sem nibh, quis pharetra ex gravida dapibus. Suspendisse leo lectus, auctor eget aliquet in, vulputate eu nibh.
    </p>

    <br />
    <br />
    <br />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget risus pharetra, vulputate metus ut, fermentum ligula. Etiam tempor, ante non viverra posuere, lacus augue posuere nisi, convallis auctor nisl mi in enim. Nullam vitae consectetur est. Nam sollicitudin tellus ut mi aliquam, id fringilla libero mollis. Maecenas suscipit vitae tellus eu pharetra. Sed vel dui orci. Proin semper sem nibh, quis pharetra ex gravida dapibus. Suspendisse leo lectus, auctor eget aliquet in, vulputate eu nibh.
    </p>
  </Description>
)

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida com o Mercado Pago</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia da loja</p>
        <p className="description">
          Garantia do vendedor: 12 meses
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre a garantia</a>
  </Section>
)

export default Product;