import styled from 'styled-components';
import GrupoCards from './Grupo-cards';
import React from "react";

import './Grupo.css';

import FotoLuis from '../../assets/nossasFotos/Luis.png';
import FotoJulia from '../../assets/nossasFotos/Julia.png';
import FotoVictor from '../../assets/nossasFotos/Victor.png';
import FotoFelipe from '../../assets/nossasFotos/Felipe.png';
import FotoLuan from '../../assets/nossasFotos/Luan.png';


function Grupo() {
    const integrantes = [
        {
            Foto: FotoLuis,
            Nome: 'Luís Garrido',
            Idade: '19 anos',
            Descricao: 'Com 19 anos, estudo engenharia de software e estou entusiasmado com a oportunidade de aprender e criar no vasto mundo da tecnologia. Tenho determinação para superar desafios e estou ansioso para o futuro.',
            Instagram: 'https://instagram.com/lbarreto_351?igshid=NjIwNzIyMDk2Mg==',
            Linkedin: 'https://www.linkedin.com/in/luís-barreto1351'
        },
        {
          Foto: FotoJulia,
          Nome: 'Julia Lins',
          Idade: '19 anos',
          Descricao: 'Estudante de Engenharia de Software na FIAP e Analista de dados no C6 Bank. Minha paixão envolve tecnologia, criatividade e inovação. Faço parte de um equipe que compartilha dessas paixões, buscando fazer a diferença.',
          Instagram: 'https://www.instagram.com/juh.az/',
          Linkedin: 'https://www.linkedin.com/in/julia-azevedo-lins/'
      },
      {
          Foto: FotoVictor,
          Nome: 'Victor Aranda',
          Idade: '19 anos',
          Descricao: 'Estudante de engenharia de Software na FIAP e analista de Mainframe na IBM.',
          Instagram: 'https://instagram.com/blue_2609?igshid=OGQ5ZDc2ODk2ZA==',
          Linkedin: 'https://www.linkedin.com/in/victor-forte'
      },
      {
          Foto: FotoFelipe,
          Nome: 'Felipe Cortez',
          Idade: '20 anos',
          Descricao: 'Estudante de engenharia de software, Analista de QA e programador do aparelho Guarda_Chuva, que ajuda você a se previnir de ser pego de surpresa por uma enchente ',
          Instagram: '#',
          Linkedin: 'https://www.linkedin.com/in/felipe-cortez-dos-santos-29306a205'
      },
      {
          Foto: FotoLuan,
          Nome: 'Luan Macea',
          Idade: '19 anos',
          Descricao: 'Oi, tenho 19 anos e meu nome é Luan. Estou atualmente cursando Engenharia de Software e estou ansioso para aprender mais nesse campo fascinante da tecnologia.',
          Instagram: 'https://instagram.com/mluan_29?igshid=NzZlODBkYWE4Ng==',
          Linkedin: 'https://www.linkedin.com/in/luan-macea-183169214'
      }
      ];

    return (
        <div className="Perguntas">
            <div className='GrupoSection01'>
                <div className='GrupoSection01Texto'>
                    <h1 className='GrupoSection01H1'>Conheça nosso time</h1> 
                    <p className='GrupoSection01P'>Descubra a equipe talentosa por trás do sistema Pé D'Água que está empenhada em tornar nossa cidade mais segura e resiliente contra enchentes.</p>
                </div>
                <div className='GrupoSection01Cards'>
                {integrantes.map((integrante, index) => (
                        <GrupoCards key={index} Foto={integrante.Foto} Nome={integrante.Nome} Idade={integrante.Idade} Descricao={integrante.Descricao} Emoji={integrante.Emoji} Facebook={integrante.Facebook} Twitter={integrante.Twitter} Instagram={integrante.Instagram} Linkedin={integrante.Linkedin}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Grupo;



