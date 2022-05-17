import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { PostButton, ImgSize, FormStyle } from "./styled";
import { TextField } from "@material-ui/core";
import logo from "../../assets/img/logo.png"

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubimitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <center>
      <ImgSize src={logo}/>
      <FormStyle onSubmit={onSubimitForm}>
        <TextField
          autoFocus
          fullWidth
          variant="outlined"
          label="email"
          
          name="email"
          value={form.email}
          onChange={onChange}
          type={"email"}
          placeholder="E-mail*"
          required
          margin="normal"
        />
        <TextField
          autoFocus
          variant="outlined"
          label="Senha"
          fullWidth
          margin="normal"

          name="password"
          value={form.password}
          onChange={onChange}
          type={"password"}
          size="30"
          placeholder="Senha*"
          required
        />
        <PostButton>Continuar</PostButton>
        
      </FormStyle>
    </center>
  );
};

export default LoginForm;
