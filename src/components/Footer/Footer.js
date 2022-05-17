import React from "react";
import { useNavigate } from "react-router-dom";
import carrinho from "../../assets/img/carrinho.jpg";
import home from "../../assets/img/home.jpg";
import profile from "../../assets/img/profile.jpg";
import { goToHome, goToProfile } from '../../router/coordinator';
import { ContainerFooter } from './styleFooter';

 

const Footer = () => {

 const navigate = useNavigate();

  

  


  return (
    <ContainerFooter>
        <img onClick={()=> goToHome(navigate)} alt='icone-home' src={home} />
        <img alt='icone-carrinho' src={carrinho} />
        <img onClick={()=> goToProfile(navigate)} alt='icone-perfil' src={profile} />

    </ContainerFooter>
  )
}

export default Footer;