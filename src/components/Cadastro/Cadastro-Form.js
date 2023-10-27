import { useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

import { Subtitulo01, Paragrafo01 } from "../Comun/Comum.js";

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

function FormPezin() {
  const [validated, setValidated] = useState(false);
  const [emailInValid, setEmailInValid] = useState(false); 
  const [emailValid, setEmailValid] = useState(false); 
  const [nomeValid, setNomeValid] = useState(false); 
  const [telefoneValid, setTelefoneValid] = useState(false); 
  const [senhaValid, setSenhaValid] = useState(false); 
  const [cep01Valid, setCep01Valid] = useState(false); 
  const [cep02Valid, setCep02Valid] = useState(false); 
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const cep01Ref = useRef(null);
  const cep02Ref = useRef(null);
  const senhaRef = useRef(null);
  const telefoneRef = useRef(null);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function handleNomeChange(event) {
    const nome = event.target.value;
    setNomeValid(nome.length > 0);
  }

  function handleEmailChange(event) {
    const email = event.target.value;
    const emailValid = validateEmail(email);
  
    setEmailInValid(!emailValid);
    setEmailValid(emailValid);
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function handleTelefoneChange(event) {
    const telefone = event.target.value;
    setTelefoneValid(telefone.length > 0);
  }

  function handleSenhaChange(event) {
    const senha = event.target.value;
    setSenhaValid(senha.length > 0);
  }




  function handleCep01Change(event) {
    const cep01 = event.target.value;
    if (cep01.length == 8) {
      fetch(`https://viacep.com.br/ws/${cep01}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('CEP not found');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.erro) {
          throw new Error('CEP not found');
        } else {
          setCep01Valid(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }




  function handleCep02Change(event) {
    const cep02 = event.target.value;
    setCep02Valid(cep02.length == 8);
  }






  async function postApi() {
    const newData = {
      CepsFavoritos: (cep01Ref.current.value + ';' + cep02Ref.current.value),
      Email: emailRef.current.value,
      Nome: nomeRef.current.value,
      Senha: senhaRef.current.value,
      Telefone: telefoneRef.current.value,
    };

    // Faça uma solicitação GET para buscar o JSON existente
    const existingResponse = await fetch(
      "https://pe-dagua-47d38-default-rtdb.firebaseio.com/DadosClientes.json"
    );
    const existingData = await existingResponse.json();

    // Verifique se o JSON existe e é um objeto
    if (existingData && typeof existingData === "object") {
      for (let i = 0; i < existingData.Nome.length; i++) {
        if (existingData.Email[i] === emailRef.current.value) { // check if email already exists
          console.log("Email na base: " + existingData.Email[i]);
          console.log("Email no site: " + emailRef.current.value);
          setEmailInValid(true); // set email validation state to false
          setEmailValid(true); // set email validation state to false
          return; 
        }
        setEmailInValid(false)
        setEmailValid(true); 
      }

      for (const key in newData) {
        if (newData.hasOwnProperty(key)) {
          if (!existingData[key]) {
            existingData[key] = [];
          }
          existingData[key].push(newData[key]);
        }
      }

      // Faça uma solicitação PATCH para atualizar o JSON com os novos valores
      const response = await fetch(
        "https://pe-dagua-47d38-default-rtdb.firebaseio.com/DadosClientes.json",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(existingData),
        }
      );

      if (response.ok) {
        console.log("Dados adicionados com sucesso");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Erro ao adicionar dados:", response.statusText);
      }
    } else {
      console.error("JSON existente não é válido");
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !emailValid) { // check if email is valid
      event.preventDefault();
      event.stopPropagation();
    } else {
      postApi();
      event.preventDefault();
    }
  
    setValidated(true);
  };
  
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "650px",
        margin: "8% auto",
        zIndex: "1",
      }}
    >
      <Subtitulo01
        id="Subtitulo01"
        style={{ color: "#5d5a88", textAlign: "center" }}
      >
        Criar conta
      </Subtitulo01>
      <Row>
        <Form.Group
          as={Col}
          md="5"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            type="Nome"
            placeholder="Nome"
            ref={nomeRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            required
            isValid={nomeValid}
            onChange={handleNomeChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha um nome.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
        as={Col}
        md="7"
        controlId="validationCustom02"
        className="mb-3"
      >
        <Form.Control
          size="lg"
          type="text"
          placeholder="Email"
          ref={emailRef}
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          required
          isInvalid={emailInValid}
          isValid={emailValid}
          onChange={handleEmailChange}
        />
        {emailInValid && (
          <Form.Control.Feedback type="invalid">
            Insira um Email valido!
          </Form.Control.Feedback>
        )}
        {emailValid && (
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        )}
      </Form.Group>
        <Form.Group
          as={Col}
          md="7"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            required
            type="number"
            placeholder="Telefone"
            ref={telefoneRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            isValid={telefoneValid}
            onChange={handleTelefoneChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha um número de telefone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="5"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="Senha"
            ref={senhaRef}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            isValid={senhaValid}
            onChange={handleSenhaChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha uma Senha.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="6"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            required
            type="number"
            placeholder="CEP favorito 1"
            ref={cep01Ref}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            isValid={cep01Valid}
            onChange={handleCep01Change}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha um CEP para salvar nos favoritos
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="6"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Control
            size="lg"
            required
            type="number"
            placeholder="CEP favorito 2"
            ref={cep02Ref}
            style={{ background: "#F0EFFF", color: "#5d5a88" }}
            isValid={cep02Valid}
            onChange={handleCep02Change}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Escolha um CEP para salvar nos favoritos
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Concordo em submeter meus dados pessoais para a Pe D'Água (Beta)."
              feedback="Você deve concordar antes de enviar."
              feedbackType="invalid"
            />
          </Form.Group>
        </Row>
      </Row>
      <BotaoCadastro>
        Criar Conta <i className="fas fa-arrow-right" type="submit"></i>{" "}
      </BotaoCadastro>
      <Paragrafo01
        style={{ color: "#5d5a88", textAlign: "center", fontSize: "20px" }}
      >
        Já possui uma conta? <br />
        Você pode <a href="#Login">Fazer login aqui!</a>
      </Paragrafo01>
    </Form>
  );
}

export default FormPezin;