import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import {
  Button, CartContainer,
  ContainerAddress, ContainerH5,
  ContainerPrice,
  ContainerTotal, FormOfPayment, FormPayment, H5Styled, InputStyled, LabelStyled, PAddress
} from "../cartPage/styled";



const CartPage = () => {

  
 
  const confirmPedido = () => {
    axios 
    .post(`${BASE_URL}/restaurants/order` )
    .then( () => {
      alert("pedido confirmado")
    })
    .catch( (err) => {
      alert(err.response.data.message)
    })
  }

  
  


  return (
    <div>
      <div>
        <h2>Meu carrinho</h2>
        </div>      
        <CartContainer>
        <ContainerAddress>
          <PAddress>Endereço de entrega</PAddress>
          
          
          
        </ContainerAddress>
          <p>carrinho vazio</p> 
        <ContainerTotal>
          <br/>
          <br/>
          <ContainerH5>
            <H5Styled>SUBTOTAL</H5Styled>
          </ContainerH5>

          <ContainerPrice>
            
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
              <InputStyled type="radio" name="pagamento" value="Cartão de crédito vinicius" />
              Cartão de crédito
            </LabelStyled>
          </div>
        </FormPayment>
        <Button onClick={ () => confirmPedido()}>Confirmar</Button>
       
        
      </CartContainer>
    </div>
  );
};

export default CartPage;