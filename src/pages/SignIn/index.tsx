import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Background, Content } from './style';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="Logo da Página" />
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Email" />
          <input placeholder="password" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="create">
          <FiLogIn />
          Criar minha conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
