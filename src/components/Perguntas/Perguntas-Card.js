import Accordion from 'react-bootstrap/Accordion';

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

function PerguntasCard({Titulo,Conteudo}) {
  return (
    <Accordion defaultActiveKey="0" style={{width:"90vw"}}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Subtitulo02 style={{color: "#5D5A88"}}>
            {Titulo}
          </Subtitulo02>
          </Accordion.Header>
        <Accordion.Body>
          <Paragrafo01 style={{color: "#9795B5", textAlign:"justify"}}>
          {Conteudo	}
          </Paragrafo01>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PerguntasCard;