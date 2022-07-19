import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CardProduto from '../../components/CardProduto/CardProduto';
import Header from '../../components/Header/Header';
import ModalQuantia from '../../components/ModalQuantia/ModalQuantia';
import { BASE_URL } from '../../constants/BASE_URL';
import { goToLoginPage } from '../../router/coordinator';
import { Banner, Local, MainContainer } from './styled';


const Restaurante = () => {
  const [rest,setRest] = useState({})
  const [produtos,setProdutos] = useState([])
  const params = useParams()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const pegaRestDetail = () => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`,{headers:{auth:token}})
    .then((response) => {
      setRest(response.data.restaurant)
      setProdutos(response.data.restaurant.products)
    }).catch((error) => {
    });
  };

  useEffect(()=>{
    if(token === null){
      goToLoginPage(navigate)
    }
    pegaRestDetail()
  },[])

  return (
    <MainContainer>
      <Header/>
      {params.produto ? <ModalQuantia produtos={produtos}/> : null}
      {rest && rest.name ? 
      <Local>    
        <Banner src={rest.logoUrl}/>
        <p className='titulo'>{rest.name}</p>
        <p>{rest.category}</p>
        <div>
          <p>{rest.deliveryTime-10} - {rest.deliveryTime} min</p>
          <p>Frete R${rest.shipping},00</p>
        </div>
        <p>{rest.address}</p>
      </Local>
      : null}      
      {produtos.length >0 ?  produtos.map((produto) => {
            return <CardProduto key={produto.id} restId={params.id} produto={produto}/>;
          }) :
          <h2>Carregando lista de produtos!</h2>}
    </MainContainer>
  )
}
export default Restaurante