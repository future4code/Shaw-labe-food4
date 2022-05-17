import axios from "axios"
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../router/coordinator";
import CardRestaurante from "../../components/CardRestaurante/CardRestaurante"



const MainContainerFeed = styled.div`
    width: 100%;
    max-width: 350px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

const CreatingPost = styled.div`
`

// const CardRestaurante = styled.div`
// `

// let iconStyles = { color: "#7869bf", fontSize: "2em", cursor: "pointer" };


// ----------------------------------------------------------------------------



const Home = () => {
   
    const [restaurantes, setRestaurantes] = useState([])

    const navigate = useNavigate();

    const onClickLogin = () => {
        goToLoginPage(navigate);
    };


    useEffect(()=>{
      getRestaurants()
    },[])


    const getRestaurants = () => {
        const tokenTeste = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1aEE1U0VyY0Q0ZzJYSVhxb01qIiwibmFtZSI6IlBhYmxvIiwiZW1haWwiOiJwYWJsb0BvaS5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xOCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTI3MjQ5MDl9.fPCYPmYhhktxwzCFT0qC92lCq41MwbarBcISKWCBM0w"

        const headers = {
            headers: {
                // auth: localStorage.getItem('token')
                auth: tokenTeste
              }
        }
        axios.get(`${BASE_URL}/restaurants`, headers)
        .then((res)=>{
          setRestaurantes(res.data.restaurants)
          console.log(res.data)
        })
        .catch((res)=>{
            console.log(res);
        })
    }


    const mapeandoRestaurantes = restaurantes.map((restaurante)=>{
        return (
        <CardRestaurante
        key = {restaurante.id}
        restaurante = {restaurante}
        nome = {restaurante.name}
        logo = {restaurante.logoUrl}
        />
        )
    })


console.log(restaurantes)
    return (
        <MainContainerFeed>
            <button onClick={onClickLogin}>LOGIN</button>
            <CreatingPost>
            </CreatingPost>
            <Cards>
            {mapeandoRestaurantes.length>0 ? mapeandoRestaurantes: <p>Loading ...</p>}
            <h3>Home</h3>

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
        </MainContainerFeed>
    )
}

export default Home