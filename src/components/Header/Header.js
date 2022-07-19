import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Conteudo, MainContainer } from './styled'
import seta from '../../assets/img/seta.png'
import { goToHome, goToLoginPage, goToProfile } from '../../router/coordinator'

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()

    const logout = () =>{
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }
  return (
    <MainContainer>
        {location.pathname === `/restaurante/${params.id}` ? 
        <Conteudo>
            <img src={seta} alt='Seta Voltar' onClick={()=>goToHome(navigate)}/>
            <p>Restaurante</p>
        </Conteudo> : null}
        {location.pathname === `/` ? 
        <Conteudo>
            <p>Rappi4</p>
            <button onClick={logout}>Logout</button>
        </Conteudo> : null}
        {location.pathname === `/user/profile` ? 
        <Conteudo>
            <p>Meu Perfil</p>
        </Conteudo> : null}
        {location.pathname === `/cart` ? 
        <Conteudo>
            <p>Meu Carrinho</p>
        </Conteudo> : null}
        {location.pathname === `/user/profile/eddit-profile` ? 
        <Conteudo>
            <img src={seta} alt='Seta Voltar' onClick={()=>goToProfile(navigate)}/>
            <p>Editar cadastro</p>
        </Conteudo> : null}
    </MainContainer>
  )
}

export default Header