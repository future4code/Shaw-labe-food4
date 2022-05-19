import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CardCart from "../../components/CardCart/CardCart";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../global/GlobalContext";
import {  Button,  CartContainer,  ContainerAddress,
        ContainerH5,  ContainerPrice,  ContainerTotal,
        FormOfPayment,  FormPayment,  H5Styled,
        InputStyled,  LabelStyled,  PAddress,} from "./styled";
import useRequestData from "../../hooks/useRequestData"


const CartPage = () => {
  const [rests,setRests] = useState()
  const [priceToPay, setPriceToPay] = useState(0);
  const {states, setter} = useContext(GlobalContext)
  const products = states.products
  const idRest = states.idRest
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1aEE1U0VyY0Q0ZzJYSVhxb01qIiwibmFtZSI6IlBhYmxvIiwiZW1haWwiOiJwYWJsb0BvaS5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xOCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTI3MjQ5MDl9.fPCYPmYhhktxwzCFT0qC92lCq41MwbarBcISKWCBM0w"

  const pegaRests = () => {
      axios.get(`${BASE_URL}/restaurants`,{headers:{auth:token}})
      .then((response) => {
        setRests(response.data.restaurants)
      }).catch((error) => {
      });
  };
  console.log(rests)

  const restaurant = rests && rests.filter((rest)=>{
    return rest.id === idRest
  })
  console.log(restaurant)

  const [profile, getProfile] = useRequestData([],`${BASE_URL}/profile`)
  console.log(profile)
  const confirmPedido = () => {
    axios
      .post(`${BASE_URL}/restaurants/order`)
      .then(() => {
        alert("pedido confirmado");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(()=>{
    pegaRests()
    let totalToPay = 0;
    products.forEach((item) => {
      totalToPay += Number(item.produto[0].price) * Number(item.quantity);
    });
    setPriceToPay(Number(totalToPay));
  },[])

  return (
      <CartContainer>
        <Header/>
        <ContainerAddress>
          <PAddress>Endereço de entrega</PAddress>
        </ContainerAddress>
        {products.length >0 ? 
          <div> 
            {rests && restaurant && restaurant.map((inf)=>{
              return(
                <div>
                  <p>{inf.name}</p> 
                  <p>{inf.address}</p> 
                  <p>{inf.deliveryTime-10} - {inf.deliveryTime} min</p>
                </div>
              )
            })}
          </div>: null}
        {products.length >0 ?  products.map((produto) => {
            return <CardCart key={produto.id} restId={idRest} quantia={produto.quantity} produto={produto.produto[0]}/>;
          }) :
          <p>carrinho vazio</p> }
        <ContainerTotal>
          <ContainerH5>
            <H5Styled>SUBTOTAL</H5Styled>
          </ContainerH5>
          <ContainerPrice>
            <p>Frete R${rests && restaurant && restaurant.map((inf)=>{
              return inf.shipping.toFixed(2) })}</p>
            <p className="valor">R${priceToPay.toFixed(2)}</p>
          </ContainerPrice>
        </ContainerTotal>
        <FormOfPayment>Forma de pagamento</FormOfPayment>
        <FormPayment>
          <div>
            <LabelStyled>
              <InputStyled type="radio" name="pagamento" value="Dinheiro" />
              Dinheiro
            </LabelStyled>
          </div>
          <div>
            <LabelStyled>
              <InputStyled
                type="radio"
                name="pagamento"
                value="Cartão de crédito "
              />
              Cartão de crédito
            </LabelStyled>
          </div>
        </FormPayment>
        <Button onClick={() => confirmPedido()}>Confirmar</Button>
        <Footer/>
      </CartContainer>
  );
};

export default CartPage;
