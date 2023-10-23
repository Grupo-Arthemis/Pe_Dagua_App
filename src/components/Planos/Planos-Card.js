import styled, { keyframes } from "styled-components";
import { ReactComponent as CheckIconOn } from "../../assets/Planos-check-circle-1.svg";
import { ReactComponent as CheckIconOff } from "../../assets/Planos-check-circle-2.svg";
import { useState } from "react";

const borderAnimation = keyframes`
  0% {
    border-color: #034c5c;
  }
  50% {
    border-color: #fff;
  }
  100% {
    border-color: #034c5c;
  }
`;

const PlanosCardWrapper = styled.div`
  margin: 50px auto;
  height: 500px;
  width: 300px;
  background-color: ${(props) => (props.escolhido ? "#034c5c" : "")};
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform: ${(props) => (props.escolhido ? "translateY(-20px)" : "")};
  box-shadow: ${(props) =>
    props.escolhido ? "0px 42px 34px 0px rgba(82, 67, 194, 0.30)" : ""};
  border: 1px solid #034c5c;
  animation: ${borderAnimation} 2s infinite;

  @media (max-width: 768px) {
    height: 500px;
    width: 95%;
  }
`;

const PlanosCardPopular = styled.div`
  background-color: #211f54;
  color: #fff;
  padding: 5px 10px;
  text-align: center;
  border-radius: 15px;
  margin-left: auto;
  width: 60%;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.833px;

  opacity: ${(props) => (props.popular ? "1" : "0")};
`;

const PlanosCardPreco = styled.h1`
  color: ${(props) => (props.escolhido ? "#fff" : "#231D4F")};
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
`;

const PlanosCardPeriodo = styled.h1`
  color: ${(props) => (props.escolhido ? "#fff" : "#231D4F")};
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PlanosCardTitulo = styled.h2`
  color: ${(props) => (props.escolhido ? "#fff" : "#231D4F")};
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PlanosCardDescricao = styled.h3`
  color: ${(props) => (props.escolhido ? "#fff" : "#231D4F")};
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BotaoEscolherPlano = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80%;
  margin: 0 auto;
  padding: 10px 30px;
  background-color: #211f54;
  border-radius: 100px;
  transition: all 0.1s linear;

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #fff;
    transform: translate(-2%, -20%);
  }
`;

function PlanosCard(props) {
  const { popular, preco, periodo, titulo, descricao, items, onClick } = props;
  const [escolhido, setEscolhido] = useState(false);


  function handleCardHover() {
    setEscolhido(!escolhido);
  }

  function handleCardUnhover() {
    setEscolhido(!escolhido);
  }

  return (
    <PlanosCardWrapper
      escolhido={escolhido}
      onMouseEnter={() => handleCardHover()}
      onMouseLeave={handleCardUnhover}
    >
      <PlanosCardPopular popular={popular}>Popular</PlanosCardPopular>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "20px",
          height: "78%",
        }}
      >
        <div>
          <PlanosCardPreco escolhido={escolhido}>{preco}</PlanosCardPreco>
          <PlanosCardPeriodo escolhido={escolhido}>{periodo}</PlanosCardPeriodo>
        </div>
        <PlanosCardTitulo escolhido={escolhido}>{titulo}</PlanosCardTitulo>
        <PlanosCardDescricao escolhido={escolhido}>
          {descricao}
        </PlanosCardDescricao>
        <ul style={{ display: "flex", flexFlow: "column", gap: "10px" }}>
          {items.map((item, index) => (
            <PlanosCardDescricao
              key={index}
              style={{ color: escolhido ? "#fff" : "#211f54" }}
            >
              {escolhido ? (
                <>
                  <CheckIconOn /> {item}
                </>
              ) : (
                <>
                  <CheckIconOff /> {item}
                </>
              )}
            </PlanosCardDescricao>
          ))}
        </ul>
      </div>
      {escolhido && <BotaoEscolherPlano>Em breve...</BotaoEscolherPlano>}
    </PlanosCardWrapper>
  );
}

export default PlanosCard;
