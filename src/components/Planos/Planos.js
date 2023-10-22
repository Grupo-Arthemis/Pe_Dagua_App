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
      popular: true,
      preco: "R$ 99,99",
      periodo: "por mês",
      titulo: "Plano Premium",
      descricao: "O melhor plano para quem quer aproveitar ao máximo",
      items: ["Consultas instântaneas", "Benefícios", "Descontos"],
      escolhido: true,
    },
    {
      popular: false,
      preco: "R$ 49,99",
      periodo: "por mês",
      titulo: "Plano Básico",
      descricao: "O plano ideal para quem está começando",
      items: ["Consultas instântaneas", "Benefícios"],
      escolhido: false,
    },
    {
      popular: false,
      preco: "R$ 49,99",
      periodo: "por mês",
      titulo: "Plano Básico",
      descricao: "O plano ideal para quem está começando",
      items: ["Consultas instântaneas", "Benefícios"],
      escolhido: false,
    },
    {
      popular: false,
      preco: "R$ 49,99",
      periodo: "por mês",
      titulo: "Plano Básico",
      descricao: "O plano ideal para quem está começando",
      items: ["Consultas instântaneas", "Benefícios"],
      escolhido: false,
    },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  function handleCardClick(index) {
    setSelectedCardIndex(index === selectedCardIndex ? -1 : index);
  }

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
            <PlanosContainer>
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
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </PlanosContainer>
          </PlanosLeftGrid>
        </div>
      </PlanosSection01>
    </div>
  );
}

export default Planos;
