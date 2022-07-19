import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { goToLoginPage, goToRestaurante } from "../../router/coordinator";
import CardRestaurante from "../../components/CardRestaurante/CardRestaurante";
import { Cards, Conteudo, CreatingPost, MainContainerFeed } from "./styled";
import Header from "../../components/Header/Header";
import Slide from "../../components/Slide/Slide";


const Home = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtrandoCategoria, setFiltrandoCategoria] = useState("");
  const token = localStorage.getItem('token')
  const navigate = useNavigate();

  const getRestaurants = () => {
    axios.get(`${BASE_URL}/restaurants`,{headers:{auth:token}})
    .then((response) => {
      setRestaurantes(response.data.restaurants)
    }).catch((error) => {
    });
  };

  useEffect(() => {
    if(token === null){
      goToLoginPage(navigate)
    }
    getRestaurants();
  }, []);

  const mapeandoRestaurantes = restaurantes
    .filter((restaurante) =>
      searchTerm
        ? restaurante.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    )
    .filter((restaurante) =>
      filtrandoCategoria
        ? restaurante.category
            .toLowerCase()
            .includes(filtrandoCategoria.toLocaleLowerCase())
        : true
    )
    .map((restaurante) => {
      return (
        <CardRestaurante
          Entrar={() => goToRestaurante(navigate, restaurante.id)}
          key={restaurante.id}
          restaurante={restaurante}
          nome={restaurante.name}
          logo={restaurante.logoUrl}
          description={restaurante.description}
          shipping={restaurante.shipping}
          deliveryTime={restaurante.deliveryTime}
        />
      );
    });
  console.log(mapeandoRestaurantes);
  const filtroCategoria = (categoria) => {
    setFiltrandoCategoria(categoria);
  };

  console.log(filtrandoCategoria);
  return (
    <MainContainerFeed>
      <Header />
      <Conteudo>
        <CreatingPost>
          <input
            type="text"
            placeholder="Buscar"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </CreatingPost>
        <Slide restaurantes={restaurantes} filtroCategoria={filtroCategoria} />
        <Cards>
          {mapeandoRestaurantes.length > 0 ? (
            mapeandoRestaurantes
          ) : (
            <p>Loading ...</p>
          )}
        </Cards>
      </Conteudo>
      <Footer />
    </MainContainerFeed>
  );
};

export default Home;
