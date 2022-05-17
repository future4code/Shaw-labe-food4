/* import useUnProtectedPage from "../../hooks/useUnprotectedPage"; */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { TextField } from "@material-ui/core";
import { PostButton,ButtonLetter,ImgSize} from "./styled";
import logo from "../../assets/img/logo.png"

/* Logica para esconder o password
Abaixo todos os imports para ocultar/mostrar a senha com MUI
import {
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons"; */

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
    signUp(form, clear, navigate /* setRightButtonText */);
  };

 /*  Logica para esconder o password
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; */

  return (
    <div>
      <ImgSize src={logo}/>
      <form onSubmit={onSubimitForm}>
        <center>
          <p>Cadastrar</p>
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
          <TextField
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
          />

          {/* Logica para esconder o password
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> */}
        </center>

        <center>
          <PostButton>
            <ButtonLetter>Cadastrar</ButtonLetter>
          </PostButton>
        </center>
      </form>
    </div>
  );
};

export default SignUpForm;
