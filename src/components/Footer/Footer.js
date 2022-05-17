import profile from "../../assets/img/profile.png";
import home from "../../assets/img/home.png";
import carrinho from "../../assets/img/carrinho.png";
import profileActive from "../../assets/img/profileActive.png";
import homeActive from "../../assets/img/homeActive.png";
import carrinhoActive from "../../assets/img/carrinhoActive.png";
import { ContainerFooter } from "./styleFooter";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToCartPage, goToHome, goToProfile } from "../../router/coordinator";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <ContainerFooter>
      {location.pathname === `/` ? 
       <div>
        <img onClick={()=> goToHome(navigate)} alt="icone-home" src={homeActive} />
        <img onClick={()=> goToCartPage(navigate)} alt="icone-carrinho" src={carrinho} />
        <img onClick={()=> goToProfile(navigate)} alt="icone-perfil" src={profile}/>
      </div> : null }
      {location.pathname === `/cart` ? 
       <div>
        <img onClick={()=> goToHome(navigate)} alt="icone-home" src={home} />
        <img onClick={()=> goToCartPage(navigate)} alt="icone-carrinho" src={carrinhoActive} />
        <img onClick={()=> goToProfile(navigate)} alt="icone-perfil" src={profile}/>
      </div> : null }
      {location.pathname === `/user/profile` ? 
       <div>
        <img onClick={()=> goToHome(navigate)} alt="icone-home" src={home} />
        <img onClick={()=> goToCartPage(navigate)} alt="icone-carrinho" src={carrinho} />
        <img onClick={()=> goToProfile(navigate)} alt="icone-perfil" src={profileActive}/>
      </div> : null }
    </ContainerFooter>
  );
};

export default Footer;
