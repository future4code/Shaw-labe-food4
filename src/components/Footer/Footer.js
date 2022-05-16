import profile from "../../assets/img/profile.jpg";
import home from "../../assets/img/home.jpg"
import carrinho from "../../assets/img/carrinho.jpg"
import { ButtonFooter, ContainerFooter } from './styleFooter';
import React from "react";
 

const Footer = () => {
 


  return (
    <ContainerFooter>
        <img alt='icone-home' src={home} />
        <img alt='icone-carrinho' src={carrinho} />
        <img alt='icone-perfil' src={profile} />
    </ContainerFooter>
  )
}

export default Footer;