import React, { useState } from "react";
import {
  Container,
  Titulo,
  Form,
  Input,
  Button,
  ContainerForm,
  Img,
  RowTitle,
} from "./style";
import BackgroundImage from "../../assets/financial-login.jpg";
import Auth from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { FaPiggyBank } from "react-icons/fa6";

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
      <Img src={BackgroundImage} />
      <ContainerForm>
        <RowTitle>
          <Titulo>Financeiros</Titulo>
          <FaPiggyBank size={30} />
        </RowTitle>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </ContainerForm>

    </Container>
  );
};

export default Login;
