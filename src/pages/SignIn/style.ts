import styled from 'styled-components';
import { shade } from 'polished';
import SignInImg from '../../assets/backgroundsignin.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;
      &::placeholder {
        color: #666360;
      }
      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      padding: 16px;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    display: flex;
    margin-top: 24px;
    align-items: center;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInImg}) no-repeat center;
  background-size: cover;
`;
