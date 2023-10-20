import styled, { keyframes } from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/Planos-check-circle-1.svg";

function PlanosCard({ popular, preco, periodo, titulo, descricao, items, escolhido }) {
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
    height: 100%;
    background-color: ${escolhido? "#034c5c" : ""};
    border-radius: 20px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transform: ${escolhido? "translateY(-20px)" : ""};
    boxShadow: ${escolhido? "0px 42px 34px 0px rgba(82, 67, 194, 0.30)" : "" };
    border: 1px solid #034c5c;
    animation: ${borderAnimation} 2s infinite;

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

    opacity: ${popular? "1" : "0"}
  `;

  const PlanosCardPreco = styled.h1`
    color: ${escolhido? "#fff" : "#231D4F"};
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
  `;
  const PlanosCardPeriodo = styled.h1`
    color: ${escolhido? "#fff" : "#231D4F"};
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;

  const PlanosCardTitulo = styled.h2`
    color: ${escolhido? "#fff" : "#231D4F"};
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;

  const PlanosCardDescricao = styled.h3`
    color: ${escolhido? "#fff" : "#231D4F"};
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
  `;

  return (
    <PlanosCardWrapper >
      <PlanosCardPopular>Popular</PlanosCardPopular>
      <div style={{ display: "flex", flexFlow: "column", gap: "20px", height:"78%" }}>
        <div>
          <PlanosCardPreco>{preco}</PlanosCardPreco>
          <PlanosCardPeriodo>{periodo}</PlanosCardPeriodo>
        </div>
        <PlanosCardTitulo>{titulo}</PlanosCardTitulo>
        <PlanosCardDescricao>{descricao}</PlanosCardDescricao>
        <ul style={{ display: "flex", flexFlow: "column", gap: "10px" }}>
          {items.map((item, index) => (
            <PlanosCardDescricao key={index}>
              <CheckIcon /> {item}
            </PlanosCardDescricao>
          ))}
        </ul>
      </div>
      {escolhido && <BotaoEscolherPlano>Escolher Plano</BotaoEscolherPlano>}
    </PlanosCardWrapper>
  );
}

export default PlanosCard;