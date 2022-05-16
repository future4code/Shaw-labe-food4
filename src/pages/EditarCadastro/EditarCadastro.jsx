import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL} from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'

const EditarCadastro = () => {
  const [profile, setProfile] = useState({})
  const [address, setAddress] = useState({})

const getProfile =()=>{
const headers = {
  headers: {
    auth : localStorage.getItem('token')
  }
}
axios
.get(`${BASE_URL}/profile`, headers)
.then((res)=>{
setProfile(res.data.user)
})
.catch((err)=>{
  console.log(err)
})
}


const getAddress =()=>{
  const headers = {
    headers: {
      auth : localStorage.getItem('token')
    }
  }
  axios
  .get(`${BASE_URL}/profile/address`, headers)
  .then((res)=>{

  setAddress(res.data.address)
  console.log(res.data.address)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
  useEffect(()=>{
    getProfile()
    getAddress()
    },[])




 

  return (
    <>
    <div>
      <p>{profile.name}</p>
      <p>{profile.email}</p>
      <p>{profile.cpf}</p>
    </div>
    
    <div>
      <p>Endereço Casdastrado</p>
      <p></p>
    </div>
    </>
  )
}
export default EditarCadastro