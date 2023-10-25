import data from "./DispositivosGuardaChuva.json";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import EnchenteAlta from "../../assets/cardsConsultasIcons/enchente-icone-alto.svg";
import EnchenteMedio from "../../assets/cardsConsultasIcons/enchente-icone-medio.svg";
import EnchenteBaixo from "../../assets/cardsConsultasIcons/enchente-icone-baixo.svg";

import UmidadeAlta from "../../assets/cardsConsultasIcons/umidade-icone-alto.svg";
import UmidadeMedio from "../../assets/cardsConsultasIcons/umidade-icone-medio.svg";
import UmidadeBaixo from "../../assets/cardsConsultasIcons/umidade-icone-baixo.svg";

import TemperaturaAlta from "../../assets/cardsConsultasIcons/temperatura-icone-alto.svg";
import TemperaturaMedio from "../../assets/cardsConsultasIcons/temperatura-icone-medio.svg";
import TemperaturaBaixo from "../../assets/cardsConsultasIcons/temperatura-icone-baixo.svg";

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
  padding: 10px 20px;
  border-radius: 25px;
  height: 75vh;
  margin: 0 auto;

  background-color: #133c4a;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

const CardConsultaSubtitulo = styled.h1`
  color: #fff;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CardConsultaTitulo = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CardConsultaDescricao = styled.h3`
  color: #fff;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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

        setNivelDeChuva(data.result[0].value);
        setUmidade(data.result[1].value);
        setTemperatura(data.result[2].value);

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
              margin: "0 auto"
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
                <img />
                <CardConsultaTitulo>Nivel de chuva Alto</CardConsultaTitulo>
                <CardConsultaDescricao>Nivel de chuva: {nivelDeChuva}</CardConsultaDescricao>
                <CardConsultaDescricao>Nivel de umidade: {umidade}</CardConsultaDescricao>
                <CardConsultaDescricao>Nivel de temperatura: {temperatura}</CardConsultaDescricao>
              </CardConsulta>
            </div>
            <div style={{ padding: "10px" }}>
            <CardConsulta>
                <img />
                <CardConsultaTitulo>Nivel de chuva Alto</CardConsultaTitulo>
                <CardConsultaDescricao>Nivel de chuva: {nivelDeChuva}</CardConsultaDescricao>
                <CardConsultaDescricao>Nivel de umidade: {umidade}</CardConsultaDescricao>
                <CardConsultaDescricao>Nivel de temperatura: {temperatura}</CardConsultaDescricao>
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
