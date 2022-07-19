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
        InputStyled,  LabelStyled,  PAddress, ProfileAdress} from "./styled";
import useRequestData from "../../hooks/useRequestData"


const CartPage = () => {
  const [rests,setRests] = useState()
  const [priceToPay, setPriceToPay] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const {states, setter} = useContext(GlobalContext)
  const products = states.products
  const idRest = states.idRest
  const token = localStorage.getItem('token')

  const pegaRests = () => {
      axios.get(`${BASE_URL}/restaurants`,{headers:{auth:token}})
      .then((response) => {
        setRests(response.data.restaurants)
      }).catch((error) => {
      });
  };
  
  const changepPayment = (event) =>{
    setPaymentMethod(event.target.value)
  }

  const restaurant = rests && rests.filter((rest)=>{
    return rest.id === idRest
  })

  const produ = products && products.map((prod)=>{
    return {
      id: prod.id,
      quantity: prod.quantity
    }
    })

  const [profile, getProfile] = useRequestData([],`${BASE_URL}/profile`)
  console.log(profile)

  const confirmPedido = () => {
    const body = {
      products:produ,
      paymentMethod: paymentMethod
    }
    axios.post(`${BASE_URL}/restaurants/${idRest}/order`,body,{headers:{auth:token}})
      .then((resp) => {
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
  },[products])

  return (
      <CartContainer>
        <Header/>
        <ContainerAddress>
          <PAddress>Endereço de entrega</PAddress>
          <ProfileAdress>{profile.address && profile.address}</ProfileAdress>
        </ContainerAddress>
        {products && products.length >0 ? 
          <div className="restinf"> 
            {rests && restaurant && restaurant.map((inf)=>{
              return(
                <div>
                  <p className="nome">{inf.name}</p> 
                  <p className="inf">{inf.address}</p> 
                  <p className="inf">{inf.deliveryTime-10} - {inf.deliveryTime} min</p>
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
            <p className="valor"> R${rests && restaurant && restaurant.map((inf)=>{
              return (inf.shipping+priceToPay).toFixed(2) })}</p>

            {/* <p className="valor">R${priceToPay.toFixed(2)}</p> */}
          </ContainerPrice>
        </ContainerTotal>
        <FormOfPayment>Forma de pagamento</FormOfPayment>
        <FormPayment>
          <div>
            <LabelStyled>
              <InputStyled 
                type="radio" 
                name="pagamento" 
                value="money"
                onChange={changepPayment} />
                Dinheiro
            </LabelStyled>
          </div>
          <div>
            <LabelStyled>
              <InputStyled
                type="radio"
                name="pagamento"
                value="creditcard"
                onChange={changepPayment}/>
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
