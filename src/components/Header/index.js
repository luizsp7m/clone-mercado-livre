import React from 'react';

import { Container, Left, Input, Right } from './styles';

import car from '../../assets/car.png';

function Header() {
  return (
      <Container>
          <Left>
              <Input>
                <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
              </Input>
              <div>
                  <a href="#">Categorias</a>
                  <a href="#">Ofertas do dia</a>
                  <a href="#">Histórico</a>
                  <a href="#">Supermercado</a>
                  <a href="#">Lojas oficiais</a>
                  <a href="#">Vender</a>
                  <a href="#">Contato</a>
              </div>
          </Left>

          <Right>
              <span>
                  <img src={car} />
                  Financie seu próximo carro aqui
              </span>
              <div>
                <a href="#">Crie sua conta</a>
                <a href="#">Entre</a>
                <a href="#">Compras</a>
                <a href="#">Carrinho</a>
              </div>
          </Right>
      </Container>
  );
}

export default Header;