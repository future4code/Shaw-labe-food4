import React from 'react'
import {ContainerProfileEddit, ProfileEdditForm} from "./styled"
import useForm from "../../hooks/useForm"
import {BASE_URL} from "../../constants/BASE_URL"
import useRequestData from "../../hooks/useRequestData"
import axios from 'axios'

const ProfileEdditPage = () => {
  /*   const [perfil, getPerfil] = useRequestData({},`${BASE_URL}/profile`)
 */
    const [form,onChange,clear] = useForm({name:"", email:"",cpf:""})
    console.log(form)

const putUpdateProfile =()=>{
    const headers = {
        headers: {
          auth: localStorage.getItem('token')
        }
      }
axios
.put(`${BASE_URL}/profile`,form, headers)
.then((res)=>{
    clear()
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

}


    const onSubmit =(e)=>{
        e.preventDefault()
        putUpdateProfile()
        console.log("oi")
    }

  return (
    <ContainerProfileEddit>
        <ProfileEdditForm onSubmit={onSubmit}>
            <input 
            placeholder='Nome'
            value={form.name}
            name={"name"}
            onChange={onChange}
            type="text" 
            />
            <input
            placeholder='E-mail'
            value={form.email}
            onChange={onChange}
            name={"email"} 
            type="email" />
            <input
            placeholder='CPF'
            value={form.cpf}
            onChange={onChange}
            name={"cpf"} 
            type="text" />
            <button> Enviar</button>
            
        </ProfileEdditForm>
    </ContainerProfileEddit>
  )
}

export default ProfileEdditPage