import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import NavBoots from './HeaderBoots.js';



function Header() {

  return (
    <>
      <header className="header-desktop">
       <NavBoots />
      </header>
    </>
  );
} 

export default Header;