import data from "./DispositivosGuardaChuva.json";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import FuntoCard from "../../assets/cardConsulta/fundoCard.png";

import TemperaturaAlta  from "../../assets/cardConsulta/cardsIcons/temperatura/3-TemperaturaAlta.png";
import TemperaturaBoa   from "../../assets/cardConsulta/cardsIcons/temperatura/2-TemperaturaBoa.png";
import TemperaturaBaixa from "../../assets/cardConsulta/cardsIcons/temperatura/1-TemperaturaBaixa.png";

import ChuvaNull from "../../assets/cardConsulta/cardsIcons/chuva/1-SemChuva.png";
import ChuvaFraca from "../../assets/cardConsulta/cardsIcons/chuva/2-ChuvaFraca.png";
import ChuvaMedia from "../../assets/cardConsulta/cardsIcons/chuva/3-ChuvaMedia.png";
import ChuvaForte from "../../assets/cardConsulta/cardsIcons/chuva/4-ChuvaForte.png";

import umidadeBaixa from "../../assets/cardConsulta/cardsIcons/umidade/1-UmidadeBaixa.png";
import umidadeBoa from "../../assets/cardConsulta/cardsIcons/umidade/2-UmidadeBoa.png";
import umidadeAlta from "../../assets/cardConsulta/cardsIcons/umidade/3-UmidadeAlta.png";

import SadEmoji from "../../assets/cardConsulta/cardsIcons/SadEmoji.gif";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Color } from "three";

const ConsuSection02CardContainer = styled.div`
  width: 100%;z'
  height: 100%;
`;

const CardConsulta = styled.div`
  width: 32vw;
  padding: 10px 20px 35% 20px;
  border-radius: 25px;
  height: 75vh;
  margin: 0 auto;
  background-image: url(${FuntoCard});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: #133c4a;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

const CardConsultaSubtitulo = styled.h1`
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

const CardConsultaTitulo = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-align: center;
`;

const CardConsultaDescricao = styled.h3`
  color: #fff;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

function VerificarAreas(
  localizacao,
  setNivelDeChuva,
  setUmidade,
  setTemperatura
) {
  let guardaChuvaIdEncontrado = null;

  for (let i = 0; i < data.length; i++) {
    const GuardaChuva = data[i];
    var vertice_1 = GuardaChuva.GuardaChuvaArea.vertice_1;
    var vertice_2 = GuardaChuva.GuardaChuvaArea.vertice_2;
    var vertice_3 = GuardaChuva.GuardaChuvaArea.vertice_3;
    var vertice_4 = GuardaChuva.GuardaChuvaArea.vertice_4;
    var vertice_5 = GuardaChuva.GuardaChuvaArea.vertice_5;
    var vertice_6 = GuardaChuva.GuardaChuvaArea.vertice_6;

    const vertices = [
      vertice_1,
      vertice_2,
      vertice_3,
      vertice_4,
      vertice_5,
      vertice_6,
    ];

    console.log("---------------------------------------------------");
    console.log(GuardaChuva.GuardaChuvaId);

    var estaDentro = pontoDentroDoPoligono(localizacao, vertices);

    if (estaDentro) {
      console.log("Guarda Chuva encontrado");
      guardaChuvaIdEncontrado = GuardaChuva.GuardaChuvaId;
      pegaDados(
        guardaChuvaIdEncontrado,
        setNivelDeChuva,
        setUmidade,
        setTemperatura
      );
      return;
    } else {
      setNivelDeChuva(0);
      setUmidade(0);
      setTemperatura(0);
      estaDentro = false;
    }
  }

  if (guardaChuvaIdEncontrado) {
    return guardaChuvaIdEncontrado;
  } else {
    return "Nenhum Guarda Chuva encontrado";
  }
}

function pontoDentroDoPoligono(ponto, vertices) {
  let dentro = false;

  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const vertice1 = vertices[i];
    const vertice2 = vertices[j];

    const intersecta =
      vertice1.lng > ponto.lng !== vertice2.lng > ponto.lng &&
      ponto.lat <
        ((vertice2.lat - vertice1.lat) * (ponto.lng - vertice1.lng)) /
          (vertice2.lng - vertice1.lng) +
          vertice1.lat;

    if (intersecta) {
      dentro = true;
    }
  }

  return dentro;
}

function pegaDados(GuardaChuvaId, setNivelDeChuva, setUmidade, setTemperatura) {
  var myHeaders = new Headers();
  myHeaders.append("device-token", GuardaChuvaId);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const apiUrlTemperatura = 'https://api.tago.io/data?variable=temperatura&query=last_item';
  const apiUrlUmidade = 'https://api.tago.io/data?variable=umidade&query=last_item';
  const apiUrlNivelDeChuva = 'https://api.tago.io/data?variable=chuva&query=last_item';
  
  fetch(apiUrlTemperatura, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      if (result.result && result.result.length > 0) {
        const data = result;
        console.log('API response (temperatura):', data);
        setTemperatura(data.result[0].value);
      } else {
        console.error('API response is missing expected data.');
      }
    })
    .catch((error) => console.log('error', error));
  
  fetch(apiUrlUmidade, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      if (result.result && result.result.length > 0) {
        const data = result;
        console.log('API response (umidade):', data);
        setUmidade(data.result[0].value);
      } else {
        console.error('API response is missing expected data.');
      }
    })
    .catch((error) => console.log('error', error));
  
  fetch(apiUrlNivelDeChuva, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      if (result.result && result.result.length > 0) {
        const data = result;
        console.log('API response (nivel de chuva):', data);
        setNivelDeChuva(data.result[0].value);
      } else {
        console.error('API response is missing expected data.');
      }
    })
    .catch((error) => console.log('error', error));
}

function ObterInfo(props) {
  const { localizacao } = props;
  const [nivelDeChuva, setNivelDeChuva] = useState("");
  const [umidade, setUmidade] = useState("");
  const [temperatura, setTemperatura] = useState("");

  useEffect(() => {
    if (localizacao != null) {
      console.log("localizacao recebida:", localizacao);
      VerificarAreas(localizacao, setNivelDeChuva, setUmidade, setTemperatura);
    }
  }, [localizacao]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {nivelDeChuva !== "" && umidade !== "" && temperatura !== "" ? (
        <ConsuSection02CardContainer>
          <Slider
            dots
            infinite
            autoplay
            slidesToShow={1}
            centerMode={true}
            centerPadding="5px"
            autoplaySpeed={5000}
            style={{
              width: "40vw",
              height: "70vh",
              margin: "0 auto",
            }}
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
                  slidesToShow: 1,
                  initialSlide: 1,
                },
              },
              {
                breakpoint: 1150,
                settings: {
                  fade: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 800,
                settings: {
                  fade: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  style: {
                    width: "95vw",
                  },
                },
              },
            ]}
          >
            <div style={{ padding: "10px" }}>
              <CardConsulta>
              <img 
                src={
                    typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaNull" ? ChuvaNull : 
                    typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaFraca" ? ChuvaFraca :
                    typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaMedia" ? ChuvaMedia :
                    typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaForte" ? ChuvaForte :
                    SadEmoji
                  }
                style={{width:"40%", margin:"0 auto"}} />
                <CardConsultaTitulo>
                {nivelDeChuva ? (
                  typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaNull" ? "Sem Chuva" :
                  typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaFraca" ? "Chuva Fraca" : 
                  typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaMedia" ? "Chuva Media" :
                  typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaForte" ? "Chuva Forte" :
                  "Sem dispositivos na região"
                ) : (
                  "Sem dispositivos na região"
                )}
                </CardConsultaTitulo>
                <CardConsultaSubtitulo>
                  { nivelDeChuva ? (
                    typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaNull" ? "Não detectamos chuva na região" :
                    typeof nivelDeChuva === "string" &&  nivelDeChuva.split(";")[1] === "ChuvaFraca" ? "Detectamos chuva fraca na região" :
                    typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaMedia" ? "Detectamos chuva media na região" :
                    typeof nivelDeChuva === "string" && nivelDeChuva.split(";")[1] === "ChuvaForte" ? "Detectamos chuva forte na região" :
                    ""
                    ) : (
                      ""
                    )}
                </CardConsultaSubtitulo>
                <CardConsultaDescricao>
                {nivelDeChuva ? (
                    <>
                      Nivel de chuva: {nivelDeChuva && typeof umidade === "string" && nivelDeChuva.split(";")[0]} mm
                    </>
                  ) : (
                    <span>Daqui a pouco estaremos ai 🐙</span>
                  )}
                </CardConsultaDescricao>
              </CardConsulta>
            </div>
            <div style={{ padding: "10px" }}>
              <CardConsulta>
                <img 
                  src={
                      typeof umidade === "string" && umidade.split(";")[1] === "UmidadeBaixa" ? umidadeBaixa :
                      typeof umidade === "string" && umidade.split(";")[1] === "UmidadeBoa" ? umidadeBoa :
                      typeof umidade === "string" && umidade.split(";")[1] === "UmidadeAlta" ? umidadeAlta :
                      SadEmoji
                  }
                  style={{width:"40%", margin:"0 auto"}} />
                <CardConsultaTitulo>
                { 
                    typeof umidade === "string" && umidade.split(";")[1] === "UmidadeBaixa" ? "Umidade Baixa" :
                    typeof umidade === "string" && umidade.split(";")[1] === "UmidadeBoa" ? "Umidade Boa" :
                    typeof umidade === "string" && umidade.split(";")[1] === "UmidadeAlta" ? "Umidade Alta" :
                    "Sem dispositivos na região"
                  }
                </CardConsultaTitulo>
                <CardConsultaSubtitulo>
                  {umidade ? ("Umidade da região:") : ("")}
                </CardConsultaSubtitulo>
                <CardConsultaDescricao>
                {umidade ? (
                    <>
                      Nivel de umidade: {umidade && typeof umidade === "string" &&  umidade.split(";")[0]} %
                    </>
                  ) : (
                    <span>Relaxa que estamos chegando 🐙</span>
                  )}
                </CardConsultaDescricao>
              </CardConsulta>
            </div>
            <div style={{ padding: "10px" }}>
              <CardConsulta>
                <img 
                  src={
                    typeof temperatura === "string" && temperatura.split(";")[1] === "TemperaturaBaixa" ? TemperaturaBaixa :
                    typeof temperatura === "string" && temperatura.split(";")[1] === "TemperaturaBoa" ? TemperaturaBoa :
                    typeof temperatura === "string" && temperatura.split(";")[1] === "TemperaturaAlta" ? TemperaturaAlta :
                    SadEmoji
                    }
                style={{width:"40%", margin:"0 auto"}} />
                <CardConsultaTitulo>
                {
                    typeof temperatura === "string" && temperatura.split(";")[1] === "TemperaturaBaixa" ? "Temperatura Baixa" :
                    typeof temperatura === "string" && temperatura.split(";")[1] === "TemperaturaBoa" ? "Temperatura Boa" :
                    typeof temperatura === "string" && temperatura.split(";")[1] === "TemperaturaAlta" ? "Temperatura Alta" :
                    "Sem dispositivos na região"
                  }
                </CardConsultaTitulo>
                <CardConsultaSubtitulo>
                  {temperatura ? ("Temperatura da região:") : ("")}
                </CardConsultaSubtitulo>
                <CardConsultaDescricao>
                {temperatura ? (
                    <>
                      Temperatura: {temperatura && typeof temperatura === "string" &&  temperatura.split(";")[0]} °C
                    </>
                  ) : (
                    <span>Estamos chegando 🐙</span>
                  )}
                </CardConsultaDescricao>
              </CardConsulta>
            </div>
          </Slider>
        </ConsuSection02CardContainer>
      ) : (
        <p>Nenhum Guarda Chuva encontrado.</p>
      )}
    </div>
  );
}

export default ObterInfo;
