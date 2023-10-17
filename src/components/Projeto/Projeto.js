import styled from 'styled-components';
import React from "react";
import ReactDOM from 'react-dom';

import ProjetoFotoSala from '../../assets/Projeto-FotoSala.png';
import ProjetoAreaAlagada from '../../assets/Projeto-AreaAlagada.png';

import ProjetoRatingCards from './Projeto-RatingCards';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MyModel from './Projeto-ModeloGuardachuva';

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";




const ProjSection01 = styled.div`
  padding: 5% 2%;
  width: 100%;
  display: flex;
  background-color: #fff;
  align-items: center;
  gap: 2vw;
  

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 5% 8%;
  }
`;

const ProjSection02 = styled.div`
  padding: 5% 2%;
  width: 100%;
  display: flex;
  background-color: #fff;
  align-items: center;
  gap: 2vw;
  

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding: 5% 8%;
  }
`;

const ProjSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;


  @media (max-width: 600px) {
    align-items: center;
  }

`;

const ProjImagem = styled.img`

  width: 40%;
  @media (max-width: 600px) {
    width: 100%;
  }

`;

const ProjSection03 = styled.div`
  padding: 5% 2%;
  width: 92%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
  margin-bottom: 2vw;
`;

const ProjSection01Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2vw;
  height: 1100%;
`;


function Projeto() {
  const avaliacoes = [
    {
      Rating: 5,
      Comentario: 'Adorei a interface do site! Muito fácil de navegar e encontrar as informações que preciso.',
      Nome: 'Ana Silva',
      Localizacao: 'São Paulo - SP'
    },
    {
      Rating: 4,
      Comentario: 'O site oferece dados precisos e úteis sobre as condições climáticas. Ótima experiência de usuário.',
      Nome: 'Carlos Oliveira',
      Localizacao: 'Rio de Janeiro - RJ'
    },
    {
      Rating: 4,
      Comentario: 'Navegação fluida e informações bem apresentadas. Uma ferramenta essencial para quem busca informações sobre o clima.',
      Nome: 'Sofia Costa',
      Localizacao: 'Sumaré - SP'
    },
    {
      Rating: 4,
      Comentario: 'Excelente site para manter-se informado sobre o clima local. Design atraente e fácil de usar.',
      Nome: 'Alex Johnson',
      Localizacao: 'Osasco - SP'
    },
    {
      Rating: 5,
      Comentario: 'O site é muito informativo e de fácil compreensão. Gostei especialmente da previsão detalhada. ',
      Nome: 'Laura Santos',
      Localizacao: 'São Paulo - SP'
    },
    {
      Rating: 5,
      Comentario: 'Site com informações fornecidas sobre o clima. Me ajudou muito durante a minha estadia.',
      Nome: 'Luca Ferrari',
      Localizacao: 'Manaus - AM'
    },
    {
      Rating: 5,
      Comentario: 'Excelente plataforma para se manter atualizado sobre as condições climáticas locais. Interface amigável e fácil de usar.',
      Nome: 'Marcos Lima',
      Localizacao: 'Fortaleza - CE'
    }
  ];
    return (
        <div className="Perguntas">
            <Titulo01 style={{color: "#5D5A88", margin:"2% 0"}}>Sobre o Projeto</Titulo01> 
            <ProjSection01 style={{backgroundColor: "#E8EFF7"}}>
                <ProjImagem src={ProjetoFotoSala} alt="Foto da sala de aula" style={{gridArea:"1"}} />
                <ProjSection01Texto style={{gridArea:"1"}}>
                  <Subtitulo01 style={{color: "#5D5A88", margin:"2% 0"}}>Como tudo começou</Subtitulo01>
                  <Paragrafo01 style={{color: "#5D5A88", textAlign: "justify"}}>
                    Movidos pela visão da IBM de criar cidades mais inteligentes e sustentáveis, encontramos inspiração para nosso projeto na faculdade FIAP.Ao aceitarmos o desafio, decidimos unir nossos talentos e paixões para criar algo duradouro.  <br /> <br /> Com a iniciativa da IBM como nosso farol, começamos a trabalhar com determinação, moldando um projeto que não apenas reflete nossa ambição, mas também nosso compromisso com o futuro da nossa cidade.
                  </Paragrafo01>
                </ProjSection01Texto>
            </ProjSection01>
            <ProjSection02 style={{backgroundColor: "#fff", '@media (minWidth: 600px)': { flexDirection: "column-reverse", backgroundColor:"red"}}}> 
                <ProjSection01Texto>
                  <Subtitulo01 style={{color: "#5D5A88", margin:"2% 0"}}>Como tudo começou</Subtitulo01>
                  <Paragrafo01 style={{color: "#5D5A88", textAlign: "justify"}}>
                    Movidos pela visão da IBM de criar cidades mais inteligentes e sustentáveis, encontramos inspiração para nosso projeto na faculdade FIAP.Ao aceitarmos o desafio, decidimos unir nossos talentos e paixões para criar algo duradouro.  <br /> <br /> Com a iniciativa da IBM como nosso farol, começamos a trabalhar com determinação, moldando um projeto que não apenas reflete nossa ambição, mas também nosso compromisso com o futuro da nossa cidade.
                  </Paragrafo01>
                </ProjSection01Texto>
                <MyModel style={{borderRadius:"20px"}} />
            </ProjSection02>
            <ProjSection01 style={{backgroundColor: "#E8EFF7"}}>
                <ProjImagem src={ProjetoFotoSala} alt="Foto da sala de aula" />
                <ProjSection01Texto>
                  <Subtitulo01 style={{color: "#5D5A88", margin:"2% 0"}}>Como tudo começou</Subtitulo01>
                  <Paragrafo01 style={{color: "#5D5A88", textAlign: "justify"}}>
                  Nosso compromisso é transformar nossa cidade em um ambiente mais inteligente e sustentável por meio de nosso projeto. <br /> <br /> Através da aplicação inovadora de tecnologia e ideias, estamos determinados a criar soluções tangíveis que melhorem a qualidade de vida dos cidadãos. Valorizamos a colaboração, a criatividade e a dedicação à causa.  <br /> <br />Nossa missão é pavimentar um caminho para um futuro mais promissor, onde cada passo conta na construção de uma comunidade mais eficiente e consciente do meio ambiente. Juntos, estamos impulsionando o progresso e o impacto positivo em nossa cidade.
                  </Paragrafo01>
                </ProjSection01Texto>
            </ProjSection01>

            <ProjSection03>
            <Titulo01 style={{color: "#5D5A88", margin:"2% 0"}}>Avaliações do site!</Titulo01> 
              <ProjSection01Cards>
                <Slider dots infinite autoplay slidesToShow={4} centerMode={true} autoplaySpeed={5000} style={{width:"100%"}}
                responsive={[
                  {
                    breakpoint: 1640,
                    settings: {
                      slidesToShow: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 1300,
                    settings: {
                      fade: false,
                      slidesToShow: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 850,
                    settings: {
                      fade: false,
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]}
                >
                  {avaliacoes.map((avaliacao, index) => (
                    <ProjetoRatingCards 
                    key={index} 
                    Rating={avaliacao.Rating} 
                    Comentario={avaliacao.Comentario} 
                    Nome={avaliacao.Nome} 
                    Localizacao={avaliacao.Localizacao}
                    />
                  ))}
                </Slider>
              </ProjSection01Cards>
            </ProjSection03>


        </div>
    );
}

export default Projeto;



