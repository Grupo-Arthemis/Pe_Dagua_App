import Form from "react-bootstrap/Form";
import styled from "styled-components";
import React, { useState } from "react";

import {
  Subtitulo01,
  Paragrafo01,
} from "../Comun/Comum";

const BotaoLogin = styled.button`
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
  background-color: #228CA3;
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

function FormGroupExample() {
  async function getApi() {
    const response = await fetch('https://pe-dagua-47d38-default-rtdb.firebaseio.com/DadosClientes.json');
    const json = await response.json();

    console.log(json);

    var data = json

    for(let i = 0; i < data.Nome.length; i++){
        if(data.Email[i] === email && data.Senha[i] === password){
            console.log("Nome: " + data.Nome[i]);
            console.log("Email: " + data.Email[i]);
            console.log("Senha: " + data.Senha[i]);

            
          localStorage.setItem('UserLogado', data.Email[i]);
          localStorage.setItem('UserLogadoCepsFavoritos',( (data.CepsFavoritos[i].split(';'))));


            return true;
        }
    }
}

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [formSubmitted, setFormSubmitted] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFormSubmitted(true);
  
    const form = event.currentTarget;
  
    if (form.checkValidity() === true) {
      console.log('Formulário válido');
      getApi()
      .then(response => {
        if (response === true){
          console.log("Login realizado com sucesso");
          document.getElementById("Subtitulo01").innerText = "Login realizado com sucesso";
          setTimeout(() => {
            window.location.reload();
          }, 4000);
          }else{
            document.getElementById("Subtitulo01").innerText = "Email ou senha incorretos";
            console.log("Email ou senha incorretos");
        }
      })      
    } else {
      console.log('Formulário inválido');
    }
  };


  return (
    <Form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
      onSubmit={handleSubmit}
    >
      <Subtitulo01 id='Subtitulo01' style={{ color: "#5d5a88", textAlign: "center" }}>
        Login
      </Subtitulo01>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          size="lg"
          type="email"
          placeholder="Enter email"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          value={email}
          onChange={(element) => setEmail(element.target.value)}
          required
        />
        <Form.Text className="text-muted">
            {formSubmitted && !email ? 'Digite um email válido.' : ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          size="lg"
          type="password"
          placeholder="Password"
          style={{ background: "#F0EFFF", color: "#5d5a88" }}
          value={password}
          onChange={(element) => setPassword(element.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{zIndex:'2'}}>
        <Form.Check type="checkbox" label="Termos e condições" required/>
      </Form.Group>
      <BotaoLogin>
        Login <i className="fas fa-arrow-right" type='submit'></i>
      </BotaoLogin>
      <Paragrafo01
        style={{ color: "#5d5a88", textAlign: "center", fontSize: "20px" }}
      >
        Ainda não possui uma conta? <br />
        Você pode <a href="#Cadastro">criar uma conta aqui!</a>
      </Paragrafo01>
    </Form>
  );
}

export default FormGroupExample;
