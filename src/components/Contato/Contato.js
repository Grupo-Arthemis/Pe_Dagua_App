import styled from 'styled-components';
import React, { useRef } from 'react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import ContatoForm from './Contato-form';

import ContatosImg from '../../assets/Contato.png'

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

const ContSection01 = styled.div`
  padding: 5% 2%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  background-color: #fff;
  align-items: center;
  gap: 2vw;
  

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 20vw;
  }
`;

const ContSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media (max-width: 600px) {
    align-items: center;
    gap: 12vw;
  }

`;


const ContSection01P = styled.p`
  color: #3D6CA2;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: justify;
  width: 90%;

  @media (max-width: 600px) {
    width: 90%; 
  }
`;

const ContSection01Form = styled.form`
  gap: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 640px;
  border-radius: 25px;
  margin: 0 auto;

  @media (max-width: 600px) {
    height: 500px; 
  }

`;

function Contatos() {
    return (
        <div className="Contatos">
            <ContSection01>
                <ContSection01Texto>
                  <img src={ContatosImg} alt="Contatos" style={{width: "70%", margin:"0 auto"}}/>
                  <ContSection01P style={{textAlign:"center"}}>
                    <EmailOutlinedIcon />  pedagua@gmail.com <br/><br/>
                    <ContactSupportOutlinedIcon />  (11) 9 9999-9999 <br/><br/>
                    <FmdGoodOutlinedIcon />  Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP 
                  </ContSection01P>
                </ContSection01Texto>
                <ContSection01Form>
                  <ContatoForm />
                </ContSection01Form>
                
            </ContSection01>
        </div>
    );
}

export default Contatos;



