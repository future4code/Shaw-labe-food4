import React from "react";
import { InputsContainer, SignUpButton, SigButtonLetter  } from "./styled";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignupPage } from "../../router/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <center>
      <InputsContainer>
        <LoginForm  />
        <SignUpButton onClick={() => goToSignupPage(navigate)}><SigButtonLetter>Crie uma conta!</SigButtonLetter></SignUpButton>
      </InputsContainer>
    </center>
  );
};

export default LoginPage;

