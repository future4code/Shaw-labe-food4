import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { registerAddres } from "../../services/user";
import { PostButton, ImgSize, InputSize } from "./styled";
import logo from "../../assets/img/logo.png";

const AddresForm = () => {
  const [form, onChange, clear] = useForm({
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
      <ImgSize src={logo} />
      <form onSubmit={onSubimitForm}>
        <center>Meu endereço</center>
        <center>
          <InputSize>
            <TextField
              name="street"
              value={form.street}
              onChange={onChange}
              type="street"
              placeholder="Logradouro"
              required
              autoFocus
              variant="outlined"
              label="Logradouro"
              fullWidth
              margin="normal"
            />
            <TextField
              name="number"
              value={form.number}
              onChange={onChange}
              type={"number"}
              size="30"
              placeholder="Número"
              required
              autoFocus
              variant="outlined"
              label="Número"
              fullWidth
              margin="normal"
            />
            <TextField
              name="neighbourhood"
              value={form.neighbourhood}
              onChange={onChange}
              type="addres"
              size="30"
              placeholder="Bairro"
              /* pattern={"^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$"}
            title={"Digite um CPF válido"} */
              required
              autoFocus
              variant="outlined"
              label="Bairro"
              fullWidth
              margin="normal"
            />
            <TextField
              name="city"
              value={form.city}
              onChange={onChange}
              type="city"
              size="30"
              placeholder="Cidade"
              /* pattern={"[^ ]{8,16}"}
            title={"Sua senha deve ter no mínimo 8 caracteres"} */
              required
              autoFocus
              variant="outlined"
              label="Cidade"
              fullWidth
              margin="normal"
            />
            <TextField
              name="state"
              value={form.state}
              onChange={onChange}
              type="state"
              size="30"
              placeholder="Estado"
              /* pattern={"[^ ]{8,16}"}
            title={"Sua senha deve ter no mínimo 8 caracteres"} */
              required
              autoFocus
              variant="outlined"
              label="Estado"
              fullWidth
              margin="normal"
            />
            <TextField
              name="complement"
              value={form.complement}
              onChange={onChange}
              type="complement"
              size="30"
              placeholder="Complemento"
              /* pattern={"[^ ]{8,16}"}
            title={"Sua senha deve ter no mínimo 8 caracteres"} */
              autoFocus
              variant="outlined"
              label="Complemento"
              fullWidth
              margin="normal"
            />
          </InputSize>
        </center>

        <center>
          <div>
          <PostButton>Criar</PostButton>
          </div>
        </center>
      </form>
    </div>
  );
};

export default AddresForm;
