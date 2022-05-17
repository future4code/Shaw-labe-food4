import React from 'react'
import { ContainerProfileEddit, ProfileEdditForm,PostButton} from "./styled"
import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/BASE_URL"
import { TextField } from "@material-ui/core";
import {goToProfile} from "../../router/coordinator"
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const ProfileEdditPage = () => {
const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" })
  console.log(form)

  const putUpdateProfile = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios
      .put(`${BASE_URL}/profile`, form, headers)
      .then((res) => {
        goToProfile(navigate)
        clear()
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const onSubmit = (e) => {
    e.preventDefault()
    putUpdateProfile()
    console.log("oi")
  }

  return (
    <ContainerProfileEddit>
      <ProfileEdditForm onSubmit={onSubmit}>
        <TextField
          placeholder='Nome'
          value={form.name}
          name={"name"}
          onChange={onChange}
          type="text"
          required
          autoFocus
          variant="outlined"
          label="Nome"
          fullWidth
          margin="normal"
        />
        <TextField
          placeholder='E-mail'
          value={form.email}
          onChange={onChange}
          name={"email"}
          type="email"
          required
          autoFocus
          variant="outlined"
          label="E-mail"
          fullWidth
          margin="normal"
        />
        <TextField
          placeholder='CPF'
          value={form.cpf}
          onChange={onChange}
          name={"cpf"}
          type="text"
          required
          autoFocus
          variant="outlined"
          label="CPF"
          fullWidth
          margin="normal"
        />
        <PostButton> Enviar</PostButton>

      </ProfileEdditForm>
    </ContainerProfileEddit>
  )
}

export default ProfileEdditPage