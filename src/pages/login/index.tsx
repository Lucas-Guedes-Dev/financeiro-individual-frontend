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

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    // Aqui você conecta com sua API, se quiser
  };

  return (
    <Container>
      <LogoImg src={Logo} alt="Logo" />
      <Titulo>Faça seu login</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
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
