import * as React from 'react';
import Card from 'react-bootstrap/Card';

import {
  Subtitulo02,
  Paragrafo01,
} from "../Comun/Comum.js";

function ActionAreaCard({ title, description, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card style={{ maxWidth: 345, height: "450px"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body style={{display:"grid", gridTemplateRows: "40% 60%"}}>
          <Subtitulo02 style={{color:"#5d5a88"}}>{title}</Subtitulo02>
          <Paragrafo01 style={{textAlign:"justify", fontSize:'0.8rem', color:'#000'}}>
            {description}
          </Paragrafo01>
        </Card.Body>
      </Card>
    </a>
  );
}

export default ActionAreaCard;