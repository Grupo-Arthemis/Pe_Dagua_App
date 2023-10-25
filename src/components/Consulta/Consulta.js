import styled from "styled-components";
import MapContainer from "./Map";
import React, { useState } from "react";
import ObterInfo from "./ObterInfo";

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

const ConsuSection01 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  gap: 10vh;
`;

const ConsuSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
`;

const ConsuSection02 = styled.div`
  padding: 5vh 2%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  background-color: #fff;
  align-items: center;
  height: 100vh;
  gap: 5%;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1.2fr;
    height: 100%;
  }
`;

const ConsuSection02InteractiveArea = styled.div`
  width: 100%;
  height: 100%;

`;

function Consulta() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="Consulta">
      <ConsuSection01>
        <ConsuSection01Texto>
          <Titulo01 style={{color: "#5D5A88"}}>
            Previsão de clima e alertas de enchentes
          </Titulo01>
          <Paragrafo01 style={{color:"#9795B5"}}>
            Obtenha informações climáticas precisas para a sua localização e
            receba alertas de enchentes em nosso portal de consulta climática.
            Esteja preparado e mantenha-se seguro.
          </Paragrafo01>
        </ConsuSection01Texto>
      </ConsuSection01>
      <ConsuSection02>
        {selectedLocation && (
          <ConsuSection02InteractiveArea>
            <ObterInfo localizacao={selectedLocation} />
          </ConsuSection02InteractiveArea>
        )}
        <MapContainer
          styled={{ width: "500px" }}
          onLocationSelect={handleLocationSelect}
        />
      </ConsuSection02>
    </div>
  );
}

export default Consulta;
