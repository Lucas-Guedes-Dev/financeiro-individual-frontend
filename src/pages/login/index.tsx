import React, { useState } from "react";
import {
  Container,
  Titulo,
  Form,
  Input,
  Button,
  Button2,
  LogoImg,
} from "./style";
import Logo from "../../assets/Logo.jpeg";
import Auth from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const loginService = new Auth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (await loginService.Login(email, senha)) {
      navigate('/')
    }
  };

  return (
    <Container>
      <LogoImg src={Logo} alt="Logo" />
      <Titulo>Faça seu login</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <Button2 type="submit">Cadastrar</Button2>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
