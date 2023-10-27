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


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Color } from "three";

const ConsuSection02CardContainer = styled.div`
  width: 100%;
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

  var apiUrl = `https://api.tago.io/data?`;

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      if (result.result && result.result.length > 0) {
        var data = result;

        setNivelDeChuva(data.result[2].value);
        setUmidade(data.result[1].value);
        setTemperatura(data.result[0].value);

        console.log("Nivel de Chuva: ", data.result[0].value);
        console.log("Umidade: ", data.result[1].value);
        console.log("Temperatura: ", data.result[2].value);
      } else {
        console.error("API response is missing expected data.");
      }
    })
    .catch((error) => console.log("error", error));
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
                  nivelDeChuva && (
                    nivelDeChuva.split(";")[1] === "ChuvaNull" ? ChuvaNull :
                    nivelDeChuva.split(";")[1] === "ChuvaFraca" ? ChuvaFraca :
                    nivelDeChuva.split(";")[1] === "ChuvaMedia" ? ChuvaMedia :
                    nivelDeChuva.split(";")[1] === "ChuvaForte" ? ChuvaForte :
                    null
                  )}
                style={{width:"40%", margin:"0 auto"}} />
                <CardConsultaTitulo>
                  { nivelDeChuva && (
                    nivelDeChuva.split(";")[1] === "ChuvaNull" ? "Sem Chuva" :
                    nivelDeChuva.split(";")[1] === "ChuvaFraca" ? "Chuva Fraca" :
                    nivelDeChuva.split(";")[1] === "ChuvaMedia" ? "Chuva Media" :
                    nivelDeChuva.split(";")[1] === "ChuvaForte" ? "Chuva Forte" :
                    null
                  )}
                </CardConsultaTitulo>
                <CardConsultaSubtitulo>
                  { nivelDeChuva && (
                    nivelDeChuva.split(";")[1] === "ChuvaNull" ? "Não detectamos chuva na região" :
                    nivelDeChuva.split(";")[1] === "ChuvaFraca" ? "Detectamos chuva fraca na região" :
                    nivelDeChuva.split(";")[1] === "ChuvaMedia" ? "Detectamos chuva media na região" :
                    nivelDeChuva.split(";")[1] === "ChuvaForte" ? "Detectamos chuva forte na região" :
                    null
                  )}
                </CardConsultaSubtitulo>
                <CardConsultaDescricao>
                  Nivel de chuva: {nivelDeChuva && nivelDeChuva.split(";")[0]}{" "}
                  mm
                </CardConsultaDescricao>
              </CardConsulta>
            </div>
            <div style={{ padding: "10px" }}>
              <CardConsulta>
                <img 
                  src={
                    umidade && (
                      umidade.split(";")[1] === "UmidadeBaixa" ? umidadeBaixa :
                      umidade.split(";")[1] === "UmidadeBoa" ? umidadeBoa :
                      umidade.split(";")[1] === "UmidadeAlta" ? umidadeAlta :
                      null
                    )
                  }
                  style={{width:"40%", margin:"0 auto"}} />
                <CardConsultaTitulo>
                { umidade && (
                    umidade.split(";")[1] === "UmidadeBaixa" ? "Umidade Baixa" :
                    umidade.split(";")[1] === "UmidadeBoa" ? "Umidade boa" :
                    umidade.split(";")[1] === "UmidadeAlta" ? "Umidade Alta" :
                    null
                  )}
                </CardConsultaTitulo>
                <CardConsultaSubtitulo>
                  Umidade da região:
                </CardConsultaSubtitulo>
                <CardConsultaDescricao>
                  Nivel de umidade: {umidade && umidade.split(";")[0]} %
                </CardConsultaDescricao>
              </CardConsulta>
            </div>
            <div style={{ padding: "10px" }}>
              <CardConsulta>
                <img 
                  src={
                    temperatura && (
                      temperatura.split(";")[1] === "TemperaturaBaixa" ? TemperaturaBaixa :
                      temperatura.split(";")[1] === "TemperaturaBoa" ? TemperaturaBoa :
                      temperatura.split(";")[1] === "TemperaturaAlta" ? TemperaturaAlta :
                      null
                    )
                  }
                style={{width:"40%", margin:"0 auto"}} />
                <CardConsultaTitulo>
                {
                    temperatura && (
                      temperatura.split(";")[1] === "TemperaturaBaixa" ? "Temperatura Baixa" :
                      temperatura.split(";")[1] === "TemperaturaBoa" ? "Temperatura Boa" :
                      temperatura.split(";")[1] === "TemperaturaAlta" ? "Temperatura Alta" :
                      null
                    )
                  }
                </CardConsultaTitulo>
                <CardConsultaSubtitulo>
                  Temperatura da região
                </CardConsultaSubtitulo>
                <CardConsultaDescricao>
                  Nivel de temperatura:{" "}
                  {temperatura && temperatura.split(";")[0]} ℃
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
