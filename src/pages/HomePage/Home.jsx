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


const CreatingPost = styled.div`
`
const Home = () => {
  const [restaurantes, setRestaurantes] = useState([]);
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

  const mapeandoRestaurantes = restaurantes.map((restaurante)=>{
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

  console.log(restaurantes);
  return (
    <MainContainerFeed>
      <Header/>
      <CreatingPost></CreatingPost>
      <Cards>
        {mapeandoRestaurantes.length > 0 ? (
          mapeandoRestaurantes
        ) : (
          <p>Loading ...</p>
        )}  
         {/* {restaurantes.length>0 ? restaurantes.map((restaurante)=>{
            return (
            <CardRestaurante
            key = {restaurante.id}
            restaurante = {restaurante}
            nome = {restaurante.name}
            logo = {restaurante.logoUrl}
            />
            )
            }) : <p>Loading ...</p>} */}
        {/* <h3>{restaurantes.name}</h3> */}
        <CardRestaurante
        // nome = {restaurantes.name}
        // logo = {restaurantes.logoUrl}
        />
      </Cards>
      <Footer/>
    </MainContainerFeed>
  );
};

export default Home;
