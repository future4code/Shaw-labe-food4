import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/BASE_URL'
import CardOrderHistory from "../Profile/CardOrderHistory"
import { MainProfile, ContainerCardName, ContainerButtonName, CardName, ContainerCardAddress,Orderhistory, CardAddress, ContainerButtonAdress, Divgrey, DivHistory } from './styled'
import { ImPencil } from "react-icons/im"
import { goToRegistrarEndereço,goToEdditProfile } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Profile = () => {
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const getProfile = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        setProfile(res.data.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <MainProfile>
      <Header/>
      <ContainerCardName>
        <CardName>
          <p>{profile.name && profile.name}</p>
          <p>{profile.email && profile.email}</p>
          <p>{profile.cpf && profile.cpf}</p>
        </CardName>
        <ContainerButtonName>
          <ImPencil onClick={()=>goToEdditProfile(navigate)} />
        </ContainerButtonName>
      </ContainerCardName>

      <ContainerCardAddress>
        <CardAddress>
          <p><span>Endereço Casdastrado</span></p>
          <p>{profile.address && profile.address}</p>
        </CardAddress>
        <ContainerButtonAdress>
          <ImPencil onClick={()=>goToRegistrarEndereço(navigate)} />
        </ContainerButtonAdress>
      </ContainerCardAddress>
      <Orderhistory>Histórico de pedidos</Orderhistory>
      <DivHistory>
        <CardOrderHistory />
      </DivHistory>
      <Footer/>
    </MainProfile>
  )
}
export default Profile