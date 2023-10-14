import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import MenuHamburguer from "../../assets/menu-hamburguer.png";
import { Link, useLocation } from 'react-router-dom';
import UserIcon from "../../assets/user-icon.png";
import './Header.css';
import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

import SobreDropdown from './HeaderDropdown.js';

const Link01 = styled(Link)`
  color: #5d5a88;
  text-decoration: none;
  font-family: DM Sans;
`

function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isSobreExpanded, setIsSobreExpanded] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  function handleMenuClick() {
    setIsMenuExpanded(!isMenuExpanded);
  }

  function handleSobreClick() {
    setIsSobreExpanded(!isSobreExpanded);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuExpanded(false);
      }
    }

    if (isMenuExpanded) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuExpanded, headerRef]);

  return (
    <>
      <header className="header-desktop">
        <div className='header__logo'>
          <img className='header__logo__imagem' src={Logo} alt='Logo com ondinhas' />
          <h1 className='header__logo__texto'>pé d’água</h1>
        </div>
        <nav className='header__menu'>
          <ul className='header__menu__lista'>
            <li><Link01 to="/#/" className={location.pathname === '/' ? 'ativo' : ''}>Home</Link01></li>
            <li><Link01 to='/consulta' className={location.pathname === '/consulta' ? 'ativo' : ''}>Consulta</Link01></li>
            <li><Link01 to='/Apoio' className={location.pathname === '/apoio' ? 'ativo' : ''}>Apoio</Link01></li>
            <li><SobreDropdown /></li>
          </ul>
        </nav>
        <div className='header__login'>
          <BotaoSecundario01 to="/Login" style={{padding:"5px 16px"}}>
            Login 
          </BotaoSecundario01>
          <BotaoPrimario01 to="/Cadastro" style={{padding:"5px 16px"}}>
            Cadastro
          </BotaoPrimario01>
        </div>
      </header>

      <header className="header-mobile" ref={headerRef}>
        <div className='header__logo'>
          <img
            className='header__logo__imagem'
            src={MenuHamburguer}
            alt='Menu Hamburguer'
            onClick={handleMenuClick}
          />
          <nav className={`header__menu ${isMenuExpanded ? 'header__menu__expandir' : ''}`}>
            <ul className='header__menu__lista'>
              <li><Link to="/home" className={location.pathname === '/' ? 'ativo' : ''}>Home</Link></li>
              <li><Link to='/consulta' className={location.pathname === '/consulta' ? 'ativo' : ''}>Consulta</Link></li>
              <li><Link to='/apoio' className={location.pathname === '/apoio' ? 'ativo' : ''}>Apoio</Link></li>
              <li id='menuSobre'>
                <a onClick={handleSobreClick} style={{cursor: "pointer"}} className={(location.pathname == ('/projeto')) || (location.pathname == ('/grupo')) || (location.pathname == ('/perguntas')) || (location.pathname == ('/contatos')) ? 'ativo' : ''}>Sobre <i className={`fas fa-angle-down ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}></i></a>
                <ul className={`header__menu__lista__sobre ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}>
                  <li><Link to='/projeto'   className={location.pathname === '/projeto' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Projeto</Link></li>
                  <li><Link to='/grupo'     className={location.pathname === '/grupo' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Grupo</Link></li>
                  <li><Link to='/perguntas' className={location.pathname === '/perguntas' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Perguntas</Link></li>
                  <li><Link to='/contatos'  className={location.pathname === '/contatos' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Contatos</Link></li> 
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header__logo'>
          <h1 className='header__logo__texto'>pé d’água</h1>
        </div>
        <div className='header__logo'>
        <Link to='/login' className='header__logo__imagem'>
          <img
            className='header__logo__imagem'
            src={UserIcon}
            alt='Menu Hamburguer'
            onClick={handleMenuClick}
          />
        </Link>
        </div>
      </header>
    </>
  );
} 

export default Header;