import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { InputStyle, PostButton, ButtonLetter } from "./styled";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubimitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <center>
      <form onSubmit={onSubimitForm}>
        <InputStyle
          name="email"
          value={form.email}
          onChange={onChange}
          type={"email"}
          size="30"
          placeholder="E-mail*"
          required
        />
        <InputStyle
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          size="30"
          placeholder="Senha*"
          required
        />
        <PostButton>
          <ButtonLetter>Continuar</ButtonLetter>
        </PostButton>
      </form>
    </center>
  );
};

export default LoginForm;
