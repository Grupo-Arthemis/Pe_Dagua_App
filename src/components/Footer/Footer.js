import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #034c5c;

  display: flex;
  flex-direction: column;

  padding: 2vw 0 0 0;
  flex-direction: column;
  align-items: center;
  color: aliceblue;
  gap: 2vw;
`;

const FooterTextos = styled.div`
  display: flex;
  padding: 0 2vw;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
  gap: 6vw;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 10vw;
    padding: 0 6vw;
  }
`;

const FooterTextosColuna = styled.ul`
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
align-items: flex-start;
  }
`;

const FooterTextosTitulo = styled.h1`
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Megrim;
font-size: clamp(2.5rem, 2.384rem + 0.617vw, 3.125rem);
font-style: normal;
font-weight: 500;
line-height: normal; 
  }
`;

const FooterTextosSubTitulo = styled.h1`
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: DM Sans;
font-size: clamp(0.938rem, 0.822rem + 0.617vw, 1.563rem);
font-style: normal;
font-weight: 400;
line-height: normal; 
padding: 0 32px 0 0;
  }
`;

const FooterTextosTopicos = styled.li`
  color: #FFF;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Text single/200/Regular */
  font-family: DM Sans;
  font-size: clamp(0.938rem, 0.903rem + 0.185vw, 1.125rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1.2vw;
  cursor: pointer;
  }
`;

const FooterTextosTopicosTitulo = styled.h3`
  color: #FFF;
  font-feature-settings: 'clig' off, 'liga' off;

  font-family: DM Sans;
  font-size: clamp(0.938rem, 0.88rem + 0.309vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
`;

const FooterBottom = styled.div`
border-top: 1px solid #F7F6FF;
width: 100%;
 }
`;

const FooterBottomCopyright = styled.div`
color: #F7F6FF;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;

font-family: DM Sans;
font-size: clamp(0.938rem, 0.88rem + 0.309vw, 1.25rem);
font-style: normal;
font-weight: 400;
line-height: normal;
width: 100%;
padding: 2vw 0;
 }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTextos>
        <FooterTextosColuna>
          <li>
            <FooterTextosTitulo>pé d’água</FooterTextosTitulo>
          </li>
          <li>
            <FooterTextosSubTitulo>
              Um sistema de alerta de alagamentos e chuvas fortes
            </FooterTextosSubTitulo>
          </li>
        </FooterTextosColuna>
        <FooterTextosColuna>
          <FooterTextosTopicos>
            <FooterTextosTopicosTitulo>Emergência</FooterTextosTopicosTitulo>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="#">Polícia - 190</StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="#">Bombeiros - 193</StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="#">SAMU - 192</StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="#">Disque Denuncia - 181</StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="#">Defesa Civial - 199</StyledA>
          </FooterTextosTopicos>
        </FooterTextosColuna>
        <FooterTextosColuna>
          <FooterTextosTopicos>
            <FooterTextosTopicosTitulo>Sobre</FooterTextosTopicosTitulo>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledLink to="/Projeto">Sobre o projeto</StyledLink>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledLink to="/Grupo">Sobre o Grupo</StyledLink>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledLink to="/Perguntas">Perguntas frequentes</StyledLink>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledLink to="/Contatos">Contatos</StyledLink>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledLink to="/Apoio">Apoio</StyledLink>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledLink to="/Planos">Planos</StyledLink>
          </FooterTextosTopicos>
        </FooterTextosColuna>
        <FooterTextosColuna>
          <FooterTextosTopicos>
            <FooterTextosTopicosTitulo>Parceiros</FooterTextosTopicosTitulo>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="https://www.ibm.com/br-pt">IBM</StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="https://www.heinzbrasil.com.br/">Heinz</StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="https://grupo-arthemis.github.io/Food_For_All/">
              Food for All
            </StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="https://www.climatempo.com.br/">Clima Tempo</StyledA>
          </FooterTextosTopicos>
          <FooterTextosTopicos>
            <StyledA href="https://grupo-arthemis.github.io/Checkpoint_Front_End_4/">
              Vinheria Rochedo
            </StyledA>
          </FooterTextosTopicos>
        </FooterTextosColuna>
      </FooterTextos>
      <FooterBottom>
        <FooterBottomCopyright>
          Copyright © 2023 Pé d´água | All Rights Reserved | Terms and
          Conditions | Privacy Policy
        </FooterBottomCopyright>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
