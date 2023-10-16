import styled from 'styled-components';
import Card from "./Perguntas-Card"

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

const PergSection01 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  gap: 10vh;
  margin: 0 auto;
`;

const PergSection01Texto = styled.div`
  gap: 10vh;
  display: flex;
  flex-direction: column;
`;

const PergSection01H1 = styled.h1`
  color: #5d5a88;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(2.188rem, 1.477rem + 1.894vw, 3.75rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PergSection01P = styled.p`
  color: #9795b5;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: justify;
`;

const PergSection01Perguntas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;



function Perguntas() {
        const perguntas = [
          {
            Titulo: 'Como receber alertas em tempo real?',
            SubTitulo: 'Como os alertas são recebidos:',
            Conteudo: 'Para receber alertas em tempo real, você pode se inscrever em nossa plataforma e configurar suas preferências de notificação. Garantimos que você seja informado sempre que houver mudanças significativas nas condições das enchentes.'
          },
          {
            Titulo: 'As informações fornecidas são confiáveis?',
            SubTitulo: 'De onde vêm os dados:',
            Conteudo: 'Sim, nossa equipe se empenha em coletar e fornecer informações precisas e confiáveis. Trabalhamos com fontes confiáveis de dados e atualizamos constantemente nossas informações para garantir a precisão.'
          },
          {
            Titulo: "Como posso contribuir com o Pé d'Água?",
            SubTitulo: 'Compartilhe suas observações:',
            Conteudo: 'Agradecemos pelo interesse em contribuir! Você pode compartilhar suas próprias observações e relatos sobre enchentes em sua região. Essas contribuições podem ajudar a melhorar nossa compreensão das condições locais.'
          },
          {
            Titulo: "O serviço do Pé d'Água é gratuito?",
            SubTitulo: 'Recursos gratuitos:',
            Conteudo: 'Sim, muitos dos nossos recursos e informações são gratuitos para os usuários. No entanto, também oferecemos opções premium com recursos adicionais para aqueles que buscam informações mais avançadas e personalizadas.'
          },
        ];

    return (
        <div className="Perguntas">
            <PergSection01>
                <PergSection01Texto>
                    <Titulo01 style={{color: "#5D5A88"}}>Duvidas frequentes</Titulo01> 
                    <Paragrafo01  style={{color:"#000", textAlign:"justify"}}>Aqui você encontrará respostas para algumas das perguntas mais comuns sobre nossos serviços. <br></br> <br></br>Se você não encontrar a resposta que procura, sinta-se à vontade para entrar em contato conosco diretamente.</Paragrafo01>
                </PergSection01Texto>
                <PergSection01Perguntas>
                    {perguntas.map((pergunta, index) => (
                        <Card key={index} Titulo={pergunta.Titulo} SubTitulo={pergunta.SubTitulo} Conteudo={pergunta.Conteudo}/>
                    ))}
                </PergSection01Perguntas>
            </PergSection01>
        </div>
    );
}

export default Perguntas;



