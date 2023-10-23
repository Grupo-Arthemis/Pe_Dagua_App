import styled from "styled-components";
import React from "react";
import { useState } from "react";

import PlanosCard from "./Planos-Card.js";

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlanosSection01 = styled.div`
  padding: 5% 2%;
  width: 100%;
  min-height: 900px;
  display: grid;
  grid-template-columns: 1;
  background-color: #fff;
  gap: 10vh;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 6.03%,
      rgba(101, 176, 231, 0.5) 33.18%,
      rgba(133, 70, 197, 0.17) 81.88%
    ),
    #fff;
`;

const PlanosLeftGrid = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
`;

const PlanosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 500px;
  width: 100%;
  min-width: 1000px;
  max-width: 1400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  gap: 20px;
`;

function Planos() {
  const planos = [
    {
      popular: false,
      preco: "Grátis",
      periodo: "",
      titulo: "Garoa",
      descricao: "Acesso a consultas instantâneas",
      items: ["Acesso gratuito", "2 endereços salvos", "Alertas"],
      escolhido: false,
    },
    {
      popular: true,
      preco: "R$ 5,99",
      periodo: "/mês",
      titulo: "Chuva",
      descricao: "Acesso a consultas instântaneas + benefícios",
      items: ["10 endereços salvos", "Tempo real", "Alertas"],
      escolhido: false,
    },
    {
      popular: false,
      preco: "R$ 14,99",
      periodo: "/mês",
      titulo: "Tempestade",
      descricao: "Aparelho personalizado e informações mais precisas",
      items: ["10 endereços salvos", "Tempo real", "Alertas", "Acesso personalizado"],
      escolhido: false,
    },
    {
      popular: false,
      preco: "R$ 99,90",
      periodo: "/10k de requisições",
      titulo: "Business",
      descricao: "A informação que a sua empresa precisa!",
      items: ["Tempo real", "API do Guarda Chuva", "Acesso personalizado"],
      escolhido: false,
    },
  ];
  return (
    <div className="Planos">
      <PlanosSection01>
        <div>
          <PlanosLeftGrid>
            <Titulo01 style={{ color: "#201F54", textAlign: "start" }}>
              Planos e assinaturas
            </Titulo01>
            <Paragrafo01 style={{ color: "#848199", textAlign: "start" }}>
              Desbloqueie vantagens exclusivas com nossos planos de assinatura.
              Torne-se membro hoje e aproveite o melhor do nosso site!
            </Paragrafo01>
              <Slider
                dots
                infinite
                autoplay
                slidesToShow={4}
                centerMode={true}
                autoplaySpeed={5000}
                style={{ width: "90vw", margin: "0 auto" }}
                responsive={[
                  {
                    breakpoint: 1640,
                    settings: {
                      slidesToShow: 3,
                      infinite: true,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 1300,
                    settings: {
                      fade: false,
                      slidesToShow: 3,
                      initialSlide: 3,
                    },
                  },
                  {
                    breakpoint: 1150,
                    settings: {
                      fade: false,
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    },
                  },
                  {
                    breakpoint: 800,
                    settings: {
                      fade: false,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ]}
              >
                {planos.map((plano, index) => (
                  <PlanosCard
                    key={index}
                    popular={plano.popular}
                    preco={plano.preco}
                    periodo={plano.periodo}
                    titulo={plano.titulo}
                    descricao={plano.descricao}
                    items={plano.items}
                    escolhido={plano.escolhido}
                  />
                ))}
              </Slider>
          </PlanosLeftGrid>
        </div>
      </PlanosSection01>
    </div>
  );
}

export default Planos;
