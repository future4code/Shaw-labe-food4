import profile from "../../assets/img/profile.jpg";
import home from "../../assets/img/home.jpg";
import carrinho from "../../assets/img/carrinho.jpg";
import { ButtonFooter, ContainerFooter } from "./styleFooter";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile } from "../../router/coordinator";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <ContainerFooter>
      <img onClick={() => goToHome(navigate)} alt="icone-home" src={home} />
      <img alt="icone-carrinho" src={carrinho} />
      <img
        onClick={() => goToProfile(navigate)}
        alt="icone-perfil"
        src={profile}
      />
    </ContainerFooter>
  );
};

export default Footer;
