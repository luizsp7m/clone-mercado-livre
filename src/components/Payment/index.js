import React from 'react';

import { Container, Title, Button, Methods, Options } from './styles';

import card from '../../assets/credit-card.png';
import mastercard from '../../assets/mastercard.png';
import visa from '../../assets/visa.png';
import discover from '../../assets/discover.png';
import barscode from '../../assets/bars-code.png'
import debitcard from '../../assets/default.png'

function Payment() {
  return (
      <Container>
          <Title>Meios de pagamento</Title>
          <Button>
              <img src={card} />
              <span>Pague em até 12x sem juros!</span>
          </Button>
          <Methods>
              <div>
                  <span>Cartões de crédito</span>
                  <div className="options">
                      <img src={mastercard} />
                      <img src={visa} />
                      <img src={discover} />
                  </div>
              </div>
              <div>
                  <span>Cartões de débito</span>
                  <div className="options">
                      <img src={debitcard} />
                  </div>
              </div>
              <div>
                  <span>Boleto bancário</span>
                  <div className="options">
                      <img src={barscode} />
                  </div>
              </div>

              <a href="#">Conheça outros meios de pagamento</a>
          </Methods>
      </Container>
  );
}

export default Payment;