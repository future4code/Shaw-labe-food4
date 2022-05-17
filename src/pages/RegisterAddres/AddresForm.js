import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
/* import useUnProtectedPage from "../../hooks/useUnprotectedPage"; */
import { registerAddres } from "../../services/user";
import {
  H1Style,
  InputStyle,
  InputFather,
  PostButton,
  ButtonLetter,
} from "./styled";

const AddresForm = () => {
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
    registerAddres(form, clear, navigate /* setRightButtonText */);
  };

  return (
    <div>
      <H1Style>Meu endereço</H1Style>
      <form onSubmit={onSubimitForm}>
        <InputFather>
          <InputStyle
            name="street"
            value={form.street}
            onChange={onChange}
            type="street"
            size="30"
            placeholder="Logradouro"
            required
          />
          <InputStyle
            name="number"
            value={form.number}
            onChange={onChange}
            type={"number"}
            size="30"
            placeholder="Número"
            required
          />
          <InputStyle
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
            type="addres"
            size="30"
            placeholder="Bairro"
            /* pattern={"^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$"}
            title={"Digite um CPF válido"} */
            required
          />
          <InputStyle
            name="city"
            value={form.city}
            onChange={onChange}
            type="city"
            size="30"
            placeholder="Cidade"
            /* pattern={"[^ ]{8,16}"}
            title={"Sua senha deve ter no mínimo 8 caracteres"} */
            required
          />
          <InputStyle
            name="state"
            value={form.state}
            onChange={onChange}
            type="state"
            size="30"
            placeholder="Estado"
            /* pattern={"[^ ]{8,16}"}
            title={"Sua senha deve ter no mínimo 8 caracteres"} */
            required
            />
           <InputStyle
            name="complement"
            value={form.complement}
            onChange={onChange}
            type="complement"
            size="30"
            placeholder="Complemento"
            /* pattern={"[^ ]{8,16}"}
            title={"Sua senha deve ter no mínimo 8 caracteres"} */
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

export default AddresForm;