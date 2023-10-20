import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";

import {
  Titulo01,
  Subtitulo01,
  Subtitulo02,
  BotaoPrimario01,
  BotaoPrimario02,
  BotaoSecundario01,
  Paragrafo01,
} from "../Comun/Comum";

const BotaoCadastro = styled.button`
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: DM Sans;
  font-size: clamp(0.625rem, 0.509rem + 0.617vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  border-radius: 9px;
  display: flex;
  padding: 2% 3%;
  align-items: center;
  gap: 8px;
  background-color: #228ca3;
  border: none;
  transition: all 0.2s ease-in-out;

  box-shadow: 0px 4px 61px 0px rgba(77, 71, 195, 0.4);

  width: 100%;
  justify-content: center;

  &:hover {
    color: #fff;
    background-color: #403e61;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 5% 3%;
  }
`;

function handleFormSubmit(event) {
  window.alert("Formulário enviado com sucesso!");
  window.reload();
}

function BasicExample() {
  return (
    <Form
      onSubmit={handleFormSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "650px",
        margin: "8% auto",
        zIndex: "1",
        gap: "20px",
      }}
    >
      <div>
        <Subtitulo02 style={{ color: "#5D5A88"}}>
          ENTRE EM CONTATO CONOSCO
        </Subtitulo02>
        <Paragrafo01 style={{ color: "#000", margin: "10px 0"}}>
          Estamos ansiosos para ouvir de você!
        </Paragrafo01>
      </div>
      <InputGroup>
        <Form.Control
          size="lg"
          type="Nome"
          placeholder="Nome"
          aria-label="Nome"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          required
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          size="lg"
          type="Nome"
          placeholder="Instagram (opcional)"
          aria-label="Nome"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          size="lg"
          type="Email"
          placeholder="Email"
          aria-label="Email"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          required
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          size="lg"
          type="number"
          placeholder="Telefone"
          aria-label="Telefone"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          required
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          placeholder="Deixe aqui seu recado, sugestão ou feedback para nós!"
          size="lg"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          required
        />
      </InputGroup>
      <BotaoCadastro type="submit" >
        Enviar sugestão <i className="fas fa-arrow-right"></i>{" "}
      </BotaoCadastro>
    </Form>
  );
}

export default BasicExample;
