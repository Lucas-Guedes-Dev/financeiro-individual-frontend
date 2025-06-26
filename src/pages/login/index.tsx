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
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const loginService = new Auth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginService.Login(email, senha);

      if (response.status === 200) {
        toast.success('Login realizado com sucesso');
        localStorage.setItem('token', response.data.access_token)
        navigate('/');
      }
    } catch (error: any) {
      if (error.status === 401) {
        toast.error('Usuário ou senha incorretos');
      }
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
