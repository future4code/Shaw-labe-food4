import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardProduto from '../../components/CardProduto/CardProduto';
import Header from '../../components/Header/Header';
import ModalQuantia from '../../components/ModalQuantia/ModalQuantia';
import { BASE_URL } from '../../constants/BASE_URL';
import { Banner, Local, MainContainer } from './styled';

const Restaurante = () => {
  const [rest,setRest] = useState({})
  const [produtos,setProdutos] = useState([])
  const params = useParams()
  // const restaurante = 1
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1aEE1U0VyY0Q0ZzJYSVhxb01qIiwibmFtZSI6IlBhYmxvIiwiZW1haWwiOiJwYWJsb0BvaS5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xOCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTI3MjQ5MDl9.fPCYPmYhhktxwzCFT0qC92lCq41MwbarBcISKWCBM0w"

  const pegaRestDetail = () => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`,{headers:{auth:token}})
    .then((response) => {
      setRest(response.data.restaurant)
      setProdutos(response.data.restaurant.products)
      console.log(response.data.restaurant)
      console.log(response.data.restaurant.products)
    }).catch((error) => {
    });
  };

  useEffect(()=>{
    pegaRestDetail()
  },[])

  return (
    <MainContainer>
      <Header/>
      {params.produto ? <ModalQuantia/> : null}
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