
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
/* import useUnProtectedPage from "../../hooks/useUnprotectedPage"; */
import { signUp } from "../../services/user";
import {
  H1Style,
  H4Style,
  InputStyle,
  InputFather,
  CheckboxStyle,
  PostButton,
  ButtonLetter,
} from "./styled";

const SignUpForm = () => {
  const [ form, onChange, clear ] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const navigate = useNavigate();
 /*  useUnProtectedPage(); */

  const onSubimitForm = (event) => {
    console.log(form);
    event.preventDefault();
    signUp(form, clear, navigate /* setRightButtonText */);
  };

  return (
    <div>
      <H1Style>Cadastrar)</H1Style>
      <form onSubmit={onSubimitForm}>
        <InputFather>
          <InputStyle
            name="name"
            value={form.name}
            onChange={onChange}
            type="text"
            size="30"
            placeholder="Nome de usuário"
            required
          />
          <InputStyle
            name="email"
            value={form.email}
            onChange={onChange}
            type={"email"}
            size="30"
            placeholder="E-mail"
            required
          />
          <InputStyle
            name="cpf"
            value={form.cpf}
            onChange={onChange}
            type="number"
            size="30"
            placeholder="Cpf"
            pattern={"[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}"}
            title={"Digite um CPF válido"}
            required
          />
          <InputStyle
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            size="30"
            placeholder="Senha"
            /* pattern={"[^ ]{8,16}"}
            title={"Sua senha deve ter no mínimo 8 caracteres"} */
            required
          />
        </InputFather>
      
        <center>
          <PostButton>
            <ButtonLetter>Criar</ButtonLetter>
          </PostButton>
        </center>
      </form>
    </div>
  );
};

export default SignUpForm;