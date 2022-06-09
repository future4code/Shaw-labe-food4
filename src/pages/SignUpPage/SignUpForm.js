/* import useUnProtectedPage from "../../hooks/useUnprotectedPage"; */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { TextField } from "@material-ui/core";
import { PostButton, ImgSize, InputSize } from "./styled";
import logo from "../../assets/img/logo.png";
import { InputPassword } from "../../components/InputChange/InputPassword";
import { InputPasswordStyle, PasswordStyle } from "../../components/InputChange/styled";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {signUp} from '../../services/user'

export const SignUpForm = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [confirmSenhaOn, setConfirmSenhaOn] = useState(false);

  //Para confirmar
  const [confirmPassword, setConfirmPassword] = useState('')

  const [ errorPassword, setErrorPassword] = useState(false)
  const navigate = useNavigate();

  //Máscara de cpf regex para CPF
  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const onSubimitForm = (event) => {
    console.log(form, confirmPassword);
    
    event.preventDefault();

    if (confirmPassword === form.password){
     /*  signUp(form, clear, navigate); */
      setErrorPassword(false)
    } else {
      /* alert("Senha incorreta") */
      setErrorPassword(true)
  };
  signUp(form,clear,navigate)
}

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
              value={cpfMask(form.cpf)}
              onChange={onChange}
              type="text"
              size="30"
              placeholder="Cpf"
              required
              autoFocus
              variant="outlined"
              label="Cpf"
              fullWidth
              margin="normal"
            />

            <InputPassword form={form} onChange={onChange} />

            <PasswordStyle>
              <TextField
                error={errorPassword}
                helperText={errorPassword ? 'Senha incorreta': ''}
                name="confirm"
                value={confirmPassword}
                onChange={(event)=> setConfirmPassword(event.target.value)}
                type={confirmSenhaOn ? "text" : "password"}
                size="30"
                placeholder="Confirmar"
                required
                autoFocus
                variant="outlined"
                label="Confirmar"
                fullWidth
                margin="normal"
              />
              <InputPasswordStyle onClick={() => setConfirmSenhaOn(!confirmSenhaOn)}>
                {confirmSenhaOn ? <Visibility /> : <VisibilityOff />}
              </InputPasswordStyle>
            </PasswordStyle>
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
