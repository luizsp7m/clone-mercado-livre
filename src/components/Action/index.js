import React from 'react';

import { Container, Row, Title, Price, Delivery, Stock, Buy, Warranty } from './styles';

import heart from '../../assets/heart.png';
import truck from '../../assets/truck.png';
import trophy from '../../assets/trophy.png';
import verified from '../../assets/verified.png';

function Action() {
    return (
        <Container>
            <Row>
                <span>Novo</span>
                <span>108 vendidos</span>
            </Row>
            <Title>
                <h1>Ryzen 5 1600AF</h1>
                <img src={heart} />
            </Title>
            <Price>
                <h3>R$ 630</h3>
                <span>em 12x R$ 52<sup>50</sup> sem juros</span>
                <a href="#">Ver os meios de pagamento</a>
            </Price>
            <Delivery>
                <h5>Enviando normalmente</h5>
                <span>
                    <img src={truck} />
                    Chegará grátis sexta-feira 16 de outubro
                </span>
                <a href="#">Ver mais formas de entrega</a>
            </Delivery>
            <Stock>
                <h5>Estoque disponível</h5>
            </Stock>
            <Buy>
                <button>Comprar agora</button>
                <button className="cart">Adicionar ao carrinho</button>
            </Buy>
            <Warranty>
                <span>
                    <img src={verified} />
                    <p><b>Compra Garantida</b> receba o produto que está esperando ou devolvemos o dinheiro.</p>
                </span>

                <span>
                    <img src={trophy} />
                    <p><b>Mercado Pontos</b>. Você acumula 1266 pontos.</p>
                </span>
            </Warranty>
        </Container>
    );
}

export default Action;