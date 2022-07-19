import React from "react";
import {  InputSize, SignUpButton  } from "./styled";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignupPage } from "../../router/coordinator";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";

const LoginPage = () => {
  const navigate = useNavigate();
  useUnProtectedPage()

  return (
    <center>
      <InputSize>
        <LoginForm/>
      </InputSize>
      <SignUpButton onClick={() => goToSignupPage(navigate)}><strong>Não possui cadastro? Clique aqui</strong></SignUpButton>
    </center>
  );
};

export default LoginPage;

