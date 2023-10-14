import styled from 'styled-components';
import LoginForm from './Login-Form';
import ImagemGarota from '../../assets/Login-Garota.png'


import React from "react";

import {
    Titulo01,
    Subtitulo01,
    Subtitulo02,
    BotaoPrimario01,
    BotaoPrimario02,
    BotaoSecundario01,
    Paragrafo01,
  } from "../Comun/Comum";


const LoginSection01 = styled.div`
  padding: 5% 2%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.50) 6.03%, rgba(101, 176, 231, 0.50) 33.18%, rgba(133, 70, 197, 0.17) 81.88%), #FFF;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.8fr 1.2fr;
        padding: 5% 8%;
    }
`;

const Garota = styled.img`
    width: 350px;
    position: absolute;
    top: auto;
    right: 0;
    transform: translate(5%, -50%);

    @media (max-width: 600px) {
        width: 200px;
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;




function Login() {

    return (
        <div className="Login">
            <LoginSection01 >
                <div style={{position:'relative'}}>
                    <Garota src={ImagemGarota} alt="Garota" />
                </div>
                <LoginForm style={{position:'relative'}} />
            </LoginSection01>
        </div>
    );
}

export default Login;



