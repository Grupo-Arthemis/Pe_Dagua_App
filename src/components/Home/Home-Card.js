import styled from 'styled-components';
import React from 'react';

const Card = styled.div`
    align-items: start;
    background: #FFF;
    border: 1px solid #D4D2E3;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    height: 100%;
    justify-content: space-around;
    padding: 2% 3%;
    width: 30%;
    align-items: center;

    @media(max-width: 600px){
        width: 90%;
        padding: 10% 3%;
    }
`;

const CardTitulo = styled.h2`
    color: #fff;
    text-align: center;
    font-family: DM Sans;
    font-size: clamp(1.563rem, 1.389rem + 0.926vw, 2.5rem);
    font-style: normal;
    font-weight: 700;
    color: #5D5A88;
`;

const CardConteudo = styled.h3`
    color: #fff;
    text-align: justify;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: clamp(0.938rem, 0.764rem + 0.926vw, 1.875rem);
    font-style: normal;
    font-weight: 400;
    color: #9795B5;
`;

function HomeCards({Titulo, Conteudo}){
    return(
        <Card>
            <CardTitulo>{Titulo}</CardTitulo>
            <CardConteudo>{Conteudo}</CardConteudo>
        </Card>
    );
}

export default HomeCards;