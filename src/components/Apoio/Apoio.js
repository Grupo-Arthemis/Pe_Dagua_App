import styled from 'styled-components';
import ApoioriaCards from './Apoio-cards';
import ApoioCarrossel from './Apoio-carrossel';
import React from "react";

import {
  Titulo01,
  Paragrafo01,
} from "../Comun/Comum.js";

import Foto_1 from '../../assets/projetosSociais/Foto (1).jpg';
import Foto_2 from '../../assets/projetosSociais/Foto (2).jpg';
import Foto_3 from '../../assets/projetosSociais/Foto (3).jpg';
import Foto_4 from '../../assets/projetosSociais/Foto (4).jpg';
import Foto_5 from '../../assets/projetosSociais/Foto (5).jpg';
import Foto_6 from '../../assets/projetosSociais/Foto (6).jpg';
import Foto_7 from '../../assets/projetosSociais/Foto (7).jpg';
import Foto_8 from '../../assets/projetosSociais/Foto (8).jpg';
import Foto_9 from '../../assets/projetosSociais/Foto (9).jpg';
import Foto_10 from '../../assets/projetosSociais/Foto (10).jpg';

const ApoioSection01 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  gap: 10vh;
  margin: 0 auto;
`;

const ApoioSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
`;

const ApoioSection01P = styled.p`
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

const ApoioSection01Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 2vw;
`;



function Apoio() {

    const Causas = [
        {
          Title: "Doações para o Combate à Pobreza",
          Description: "Apoie organizações como a ONG Teto, que constrói moradias populares para pessoas em situação de precariedade, e a ONG Banco de Alimentos, que combate o desperdício de comida, fornecendo-a para quem necessita.",
          Image: Foto_1,
          Link: "https://teto.org.br/"
        },
        {
          Title: "Doações para a Saúde",
          Description: "Apoie organizações como a Associação de Apoio à Criança com Câncer (AACC), a Associação Educacional de Diabetes e o Grupo de Incentivo à Vida (GIV) que se concentram na promoção da saúde e apoio a pessoas com HIV.",
          Image: Foto_2,
          Link: "https://www.aacc.org.br/"
        },
        {
          Title: "Doações para Crianças",
          Description: "Apoie organizações como a Fundação Francisca Franco e as Aldeias Infantis SOS, que se dedicam a auxiliar crianças em situação de vulnerabilidade social, oferecendo-lhes suporte e oportunidades.",
          Image: Foto_3,
          Link: "https://www.aldeiasinfantis.org.br/"
        },
        {
          Title: "Doações para Idosos",
          Description: "Apoie o Instituto Velho Amigo, uma organização que busca integrar os idosos na sociedade, tirando-os do isolamento e promovendo seu papel ativo nas comunidades.",
          Image: Foto_4,
          Link: "https://www.atados.com.br/ong/projetovelhoamigo"
        },
        {
          Title: "Doações para Catástrofes",
          Description: "Apoie organizações como a Cruz Vermelha Brasileira e o Médicos Sem Fronteiras, que atuam no auxílio às vítimas de catástrofes como terremotos, inundações e outros desastres.",
          Image: Foto_5,
          Link: "https://doe.msf.org.br/doacao-mensal-pessoal?msclkid=b5964057d06414301b982551a0ae857c&utm_source=bing&utm_medium=cpc&utm_campaign=%5BExiber%5D%20%5Bsch%5D%20%5Bcpto%5D%20-%20Institucional&utm_term=m%C3%A9dicos%20sem%20fronteiras&utm_content=%5BExiber%5D%20%5Bcpto%5D%20Institucional"
        },
        {
          Title: "Doações para o Meio Ambiente",
          Description: "Apoie organizações como o Greenpeace Brasil e o Instituto Socioambiental (ISA), que estão envolvidas na preservação do meio ambiente e na luta contra as mudanças climáticas.",
          Image: Foto_6,
          Link: "https://www.socioambiental.org/"
        },
        {
          Title: "Doações para a Educação",
          Description: "Apoie organizações como a Fundação Bradesco e o Instituto Ayrton Senna, que promovem a educação no Brasil, contribuindo para o desenvolvimento humano e social.",
          Image: Foto_7,
          Link: "https://www.ev.org.br/"
        },
        {
          Title: "Doações para Direitos Humanos",
          Description: "Apoie organizações como a Anistia Internacional Brasil e a Conectas Direitos Humanos, que defendem os direitos humanos no país, trabalhando por uma sociedade mais justa e igualitária.",
          Image: Foto_8,
          Link: "https://anistia.org.br/"
        },
        {
          Title: "Doações para Arte e Cultura",
          Description: "Apoie organizações como o Instituto Moreira Salles e o Museu da Imagem e do Som (MIS), que se dedicam à promoção da arte e cultura no Brasil.",
          Image: Foto_9,
          Link: "https://ims.com.br/unidade/sao-paulo/"
        },
        {
          Title: "Doações para Animais",
          Description: "Apoie organizações como a World Animal Protection (WAP) e a União Internacional Protetora dos Animais (UIPA), que lutam pelos direitos dos animais no Brasil.",
          Image: Foto_10,
          Link: "https://www.worldanimalprotection.org.br/"
        },
      ]
    
    return (
        <div className="Apoio">
            <ApoioSection01>
                <ApoioSection01Texto>
                    <Titulo01 style={{color:"#5d5a88"}}>Saiba onde apoiar</Titulo01> 
                    <ApoioCarrossel />
                    <Paragrafo01 style={{color:"#000"}}>Mesmo durante os momentos dificeis, a luz da esperança não pode ser apagada, saiba como ajudar:</Paragrafo01>
                </ApoioSection01Texto>
                <ApoioSection01Cards>


                {Causas.map((Causa, index) => (
                        <ApoioriaCards key={index} title={Causa.Title} description={Causa.Description} image={Causa.Image} link={Causa.Link} />
                    ))}

                </ApoioSection01Cards>
            </ApoioSection01>
        </div>
    );
}

export default Apoio;



