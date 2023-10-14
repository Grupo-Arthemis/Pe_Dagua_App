import styled from 'styled-components';
import CadastroForm from './Cadastro-Form';
import GarotaCadastro from '../../assets/Garota-Cadastro.png';
import GarotoCadastro from '../../assets/Garoto-Cadastro.png';

import React from "react";

import {
    Titulo01,
    Subtitulo01,
    Subtitulo02,
    BotaoPrimario01,
    BotaoPrimario02,
    BotaoSecundario01,
    Paragrafo01,
  } from "../Comun/Comum.js";


const CadastroSection01 = styled.div`
  padding: 5% 2% 0% 2%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.6fr 0.7fr;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.50) 6.03%, rgba(101, 176, 231, 0.50) 33.18%, rgba(133, 70, 197, 0.17) 81.88%), #FFF;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.6fr 1.4fr;
        padding: 5% 8%;
    }
`;

const Garota = styled.img`
    width: 480px;
    position: absolute;
    bottom: 15%;
    right: 40%;
    transform: translate(50%, 0%);
    z-index: 1;

    @media (max-width: 600px) {
        width: 200px;
        position: absolute;
        bottom: 591%;
        left: 65%;
        transform: translate(-50%, -50%);
    }
`;

const Garoto = styled.img`
    width: 680px;
    position: absolute;
    bottom: 0%;
    right: 40%;
    transform: translate(50%, -0%);
    z-index: 1;

    @media (max-width: 600px) {
        width: 200px;
        position: absolute;
        top: 50%;
        left: 38%;
        transform: translate(-50%, -50%);
    }
`;




function Cadastro() {

    return (
        <div className="Cadastro">
            <CadastroSection01 >
                <div style={{position:'relative', height:"100%"}}>
                    <Garoto src={GarotoCadastro} alt="Garoto" />
                </div>

                <CadastroForm style={{position:'relative' }} />

                <div style={{position:'relative', height:"100%"}}  >
                    <Garota src={GarotaCadastro} alt="Garota" />
                </div>
            </CadastroSection01>
        </div>
    );
}

export default Cadastro;



