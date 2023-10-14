import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

const Link01 = styled(Link)`
  color: #5d5a88;
  text-decoration: none;
  font-family: DM Sans;
`

function SobreDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown">
      <span
        onClick={toggleDropdown}
        style={{ cursor: 'pointer' }}
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sobre <i className='fas fa-angle-down'></i>
      </span>
      <ul
        className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton"
      >
        <li className="dropdown-item">
{/* eslint-disable-next-line no-restricted-globals */}
            <Link01 to='/projeto'   className={location.pathname === '/projeto' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Projeto</Link01>
        </li >
        <li className="dropdown-item">
{/* eslint-disable-next-line no-restricted-globals */}
            <Link01 to='/grupo'     className={location.pathname === '/grupo' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Grupo</Link01>
        </li >
        <li className="dropdown-item">
{/* eslint-disable-next-line no-restricted-globals */}
            <Link01 to='/perguntas' className={location.pathname === '/perguntas' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Perguntas</Link01>
        </li>
        <li className="dropdown-item">
{/* eslint-disable-next-line no-restricted-globals */}
            <Link01 to='/contatos'  className={location.pathname === '/contatos' ? 'ativo' : ''}>&nbsp; <i className='fas fa-angle-right'></i> Contatos</Link01>
        </li>
      </ul>
    </div>
  );
}

export default SobreDropdown;
