/* import useUnProtectedPage from "../../hooks/useUnprotectedPage"; */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { TextField } from "@material-ui/core";
import { PostButton, ButtonLetter, ImgSize, InputSize } from "./styled";
import logo from "../../assets/img/logo.png";
import { InputPassword } from "../../components/InputChange/InputPassword";

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubimitForm = (event) => {
    console.log(form);
    event.preventDefault();
    signUp(form, clear, navigate);
  };

  return (
    <div>
      <ImgSize src={logo} />
      <form onSubmit={onSubimitForm}>
        <center>
          <p>Cadastrar</p>
          <InputSize>
            <TextField
              name="name"
              value={form.name}
              onChange={onChange}
              type="text"
              size="30"
              placeholder="Nome de usuário"
              required
              autoFocus
              variant="outlined"
              label="Nome de usuário"
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              value={form.email}
              onChange={onChange}
              type={"email"}
              size="30"
              placeholder="E-mail"
              required
              autoFocus
              variant="outlined"
              label="E-mail"
              fullWidth
              margin="normal"
            />
            <TextField
              name="cpf"
              value={form.cpf}
              onChange={onChange}
              type="number"
              size="30"
              placeholder="Cpf"
              pattern={
                "^([0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}|[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2})$"
              }
              title={"Digite um CPF válido"}
              required
              autoFocus
              variant="outlined"
              label="Cpf"
              fullWidth
              margin="normal"
            />
            {/*  <TextField
              name="password"
              value={form.password}
              onChange={onChange}
              type={"password"}
              size="30"
              placeholder="Senha"
              required
              autoFocus
              variant="outlined"
              label="Senha"
              fullWidth
              margin="normal"
            /> */}
            <InputPassword form={form} onChange={onChange} />
          </InputSize>
        </center>

        <center>
          <PostButton>Cadastrar</PostButton>
        </center>
        
      </form>
    </div>
  );
};

export default SignUpForm;
