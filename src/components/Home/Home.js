import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import imagemDeFundo01 from "../../assets/Fundo-Section-1.svg";
import HomeCard from "./Home-Card";


import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

const HomeSection01 = styled.section`
  padding: 8% 2%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  background-image: url(${imagemDeFundo01});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
    padding: 8% 8%;
  }
`;

const HomeSection01Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5vh;
  width: 100%;
`;

const HomeSection01ConteudoBotoesContainer = styled.h2`
  display: flex;
  width: 100%;
  gap: 1vw;
`;

const HomeSection02 = styled.section`
  padding: 8% 2%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding: 8% 8%;
  }
`;

const Section02VideoPitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  @media only screen and (max-width: 600px) {
    gap: 10vw;
  }
`;

const Section02Video = styled.div`
  background: #eae8f0;
  border-radius: 20px;
  width: 64.8vw;
  height: 36.6vw;
  margin: auto;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 83.1vw;
    height: 46.6vw;
  }
`;

const HomeSection03 = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 8% 2%;
    width: 100%;
    height: 100%;   
    gap: 2vw;
    margin-bottom: 5%;

    @media only screen and (max-width: 600px) {
        gap: 10vw;
        width: 100%;
        height: 100%;
        padding: 8% 8%;
    }
  }
`;

const HomeSection03CardContainer = styled.section`
    align-items: center;
    display: flex;
    gap: 5vw;
    height: 30vw;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 600px) {

        flex-direction: column;
        height: 100%;
        gap: 10vw;
    }
  }
`;

function Home() {
  const cardData = [
    {
      Titulo: "Milhares de vidas salvas",
      Conteudo:
        "Nosso sistema Pé D'Água já contribuiu para salvar milhares de vidas, tornando nossa cidade mais segura a cada dia.",
    },
    {
      Titulo: "Novas tecnologias",
      Conteudo:
        "Estamos sempre em busca de novas tecnologias para melhorar nossos serviços e garantir a segurança da população.",
    },
    {
      Titulo: "Atendimento 24 horas",
      Conteudo:
        "Nossa equipe está disponível 24 horas por dia para atender emergências e garantir a segurança da população.",
    },
  ];

  return (
    <div className="Home">
      <HomeSection01>
        <HomeSection01Conteudo>
          <Titulo01 style={{ textAlign: "start" }}>
            Um sistema de alerta de enchentes e chuvas fortes
          </Titulo01>
          <Paragrafo01 style={{ textAlign: "justify" }}>
            Mantenha-se seguro das águas. Sua fonte confiável para informações
            precisas e atualizadas sobre condições climáticas e níveis de água,
            ajudando você a tomar decisões bem-informadas.
          </Paragrafo01>
          <HomeSection01ConteudoBotoesContainer>
            <BotaoPrimario01 to="/consulta">
              Consulte a sua localização
              <i className="fas fa-arrow-right"></i>
            </BotaoPrimario01>
            <BotaoSecundario01 to="/projeto">
              Saiba mais <i className="fas fa-arrow-right"></i>
            </BotaoSecundario01>
          </HomeSection01ConteudoBotoesContainer>
        </HomeSection01Conteudo>
      </HomeSection01>

      <HomeSection02>
        <Section02VideoPitchContainer>
          <Subtitulo01 style={{ color: "#5D5A88" }}>
            Vivencie e encontre.
          </Subtitulo01>
          <Subtitulo02 style={{ color: "#000" }}>
            Motivos pelos quais você pode confiar em nós.
          </Subtitulo02>
          <Section02Video>
            <ReactPlayer
              controls={true}
              url="https://youtu.be/9QY3zcMDWgY"
              width="100%"
              height="100%"
            />
          </Section02Video>
        </Section02VideoPitchContainer>
      </HomeSection02>

      <HomeSection03>
        <Subtitulo01 style={{ color: "#5D5A88" }}>
          Nossos Resultados
        </Subtitulo01>
        <HomeSection03CardContainer>
          {cardData.map((card, index) => (
            <HomeCard
              key={index}
              Titulo={card.Titulo}
              Conteudo={card.Conteudo}
            />
          ))}
        </HomeSection03CardContainer>
      </HomeSection03>
    </div>
  );
}

export default Home;
