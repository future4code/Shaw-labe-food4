import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL} from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import CardOrderHistory from "../Profile/CardOrderHistory"
import { CardName,CardAddress,Divgrey,DivHistory} from './styled'

const Profile = () => {
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
    <CardName>
      <p>{profile.name}</p>
      <p>{profile.email}</p>
      <p>{profile.cpf}</p>
    </CardName>
    
    <CardAddress>
      <p>Endereço Casdastrado</p>
      <p></p>
    </CardAddress>
    <p>Histórico de pedidos</p>
    <Divgrey>
    </Divgrey>
    <DivHistory>
    
    <CardOrderHistory/>
    </DivHistory>
    </>
  )
}
export default Profile