import React from 'react';

import { Container, Title, Shop, Row, Thermometer } from './styles';

import Logo from '../../assets/amd.png';
import chat from '../../assets/chat.png';
import clock from '../../assets/clock.png';

function SellerInfo() {
    return (
        <Container>
            <Title>Informações da loja</Title>
            <Shop>
                <img src={Logo} />
                <div>
                    <h5>AMD</h5>
                    <span>Loja oficial no Mercado Livre</span>
                </div>
            </Shop>
            <Thermometer>
                <div />
                <div />
                <div />
                <div />
                <div />
            </Thermometer>
            <Row>
                <div>
                    <h3>1401</h3>
                    <span>Vendas nos últimos 4 meses</span>
                </div>
                <div>
                    <img src={chat} />
                    <span>Presta um bom atendimento</span>
                </div>
                <div>
                    <img src={clock} />
                    <span>Entrega os produtos dentro do prazo</span>
                </div>
            </Row>

            <a href="#">Ver mais dados de AMD</a>
        </Container>
    );
}

export default SellerInfo;