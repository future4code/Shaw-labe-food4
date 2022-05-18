import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { goToLoginPage, goToRestaurante } from "../../router/coordinator";
import CardRestaurante from "../../components/CardRestaurante/CardRestaurante";
import { Cards, MainContainerFeed } from "./styled";
import Header from "../../components/Header/Header";
import Slide from "../../components/Slide/Slide"


const CreatingPost = styled.div`
margin: 6px;
`
const Home = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [filtrandoCategoria, setFiltrandoCategoria] = useState("")
  const navigate = useNavigate();

  const getRestaurants = () => {
    const tokenTeste =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1aEE1U0VyY0Q0ZzJYSVhxb01qIiwibmFtZSI6IlBhYmxvIiwiZW1haWwiOiJwYWJsb0BvaS5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xOCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTI3MjQ5MDl9.fPCYPmYhhktxwzCFT0qC92lCq41MwbarBcISKWCBM0w";

    const headers = {
      headers: {
        // auth: localStorage.getItem('token')
        auth: tokenTeste,
      },
    };
    axios
      .get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurantes(res.data.restaurants);
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  useEffect(()=>{
    getRestaurants()
  },[])

  const mapeandoRestaurantes = restaurantes
  .filter((restaurante)=>searchTerm? restaurante.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  .filter((restaurante)=>filtrandoCategoria? restaurante.category.toLowerCase().includes(filtrandoCategoria.toLocaleLowerCase()) : true)
  .map((restaurante)=>{
    return (
      <CardRestaurante
        Entrar={()=>goToRestaurante(navigate,restaurante.id)}
        key = {restaurante.id}
        restaurante = {restaurante}
        nome = {restaurante.name}
        logo = {restaurante.logoUrl}
        description = {restaurante.description}
        shipping = {restaurante.shipping}
        deliveryTime = {restaurante.deliveryTime}
      />
      )
  })
console.log(mapeandoRestaurantes)
  const filtroCategoria = (categoria) => {
    setFiltrandoCategoria(categoria)

  }

console.log(filtrandoCategoria)
  return (
    <MainContainerFeed>
      <Header/>
      <CreatingPost>
          <input
            type="text"
            placeholder="Buscar"
            onChange={(event)=>{
            setSearchTerm(event.target.value)
            }}
            />
      </CreatingPost>
      
      <Slide 
      restaurantes = {restaurantes}
      filtroCategoria = {filtroCategoria}
      
      />

      <Cards>
        {mapeandoRestaurantes.length > 0 ? (
          mapeandoRestaurantes
        ) : (
          <p>Loading ...</p>
        )}  
        
        <CardRestaurante/>
      </Cards>
      <Footer/>
    </MainContainerFeed>
  );
};

export default Home;
