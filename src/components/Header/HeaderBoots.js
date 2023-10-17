import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { useState } from 'react';

import {
    Titulo01,
    Subtitulo01,
    Subtitulo02,
    BotaoPrimario01,
    BotaoPrimario02,
    BotaoSecundario01,
    Paragrafo01,
} from "../Comun/Comum";

const BotaoCadastro = styled(Link)`
    color: #fff;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    background-color: #238ca4;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #403e61;
    }

    @media (max-width: 600px) {
        width: 40%;
        padding: 3% 3%;
        
    }
`

const BotaoLogin = styled(Link)`
    color: #5d5a88;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: DM Sans;
    font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
    font-style: normal;
    font-weight: 700;
    border-radius: 9px;
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    background-color: #fff;
    border: 1px solid #d4d2e3;
    transition: all 0.2s ease-in-out;

    &:hover {
    color: #fff;
    background-color: #403e61;
    }

    @media (max-width: 600px) {
        width: 40%;
        padding: 3% 3%;
        
    }
`

const BotoesContainer = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 600px) {
        gap: 8px;
        margin-top: 16px;
    }
`

const PeDaguaTexto = styled.h1`
color: #373549;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Megrim;
font-size: clamp(0.8em, 0.8em + 2vw, 2.5em);
font-style: normal;
font-weight: 500;
line-height: 100%; 
`



const Link01 = styled(Link)`
  color: #5d5a88;
  text-decoration: none;
  font-family: DM Sans;
`


function OffcanvasExample() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
  
    const handleCloseOffcanvas = () => {
      setShowOffcanvas(false);
    };
  
    const handleToggleOffcanvas = () => {
      setShowOffcanvas(!showOffcanvas);
    };
  
    return (
      <Navbar expand="sm" style={{ backgroundColor: '#fff' }}>
        <Container fluid>
          <img src={Logo} alt='Logo com ondinhas' style={{ height: "50px" }} />
          <PeDaguaTexto>pé d’água</PeDaguaTexto>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggleOffcanvas} />
          <Navbar.Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={Logo} alt='Logo com ondinhas' style={{ height: "40px", marginRight: "10px" }} />
                  <PeDaguaTexto>pé d’água</PeDaguaTexto>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#/" onClick={handleCloseOffcanvas}>
                  Home
                </Nav.Link>
                <Nav.Link href="#Consulta" onClick={handleCloseOffcanvas}>
                  Consulta
                </Nav.Link>
                <Nav.Link href="#Apoio" onClick={handleCloseOffcanvas}>
                  Apoio
                </Nav.Link>
                <Nav.Link href="#Planos" onClick={handleCloseOffcanvas}>
                  Planos
                </Nav.Link>
                <NavDropdown
                  title="Sobre"
                  id="offcanvasNavbarDropdown"
                >
                  <NavDropdown.Item href="#Projeto">
                    Sobre o Projeto
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Grupo">
                    Sobre o Grupo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Contato">
                    Contato
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Perguntas">
                    Perguntas Frequentes
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <BotoesContainer>
                <BotaoLogin to="/Login" onClick={handleCloseOffcanvas}>
                  Login
                </BotaoLogin>
                <BotaoCadastro to="/Cadastro" onClick={handleCloseOffcanvas}>
                  Cadastro
                </BotaoCadastro>
              </BotoesContainer>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
  
  export default OffcanvasExample;