import axios from "axios";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/BASE_URL";
import {  Button,  CartContainer,  ContainerAddress,
        ContainerH5,  ContainerPrice,  ContainerTotal,
        FormOfPayment,  FormPayment,  H5Styled,
        InputStyled,  LabelStyled,  PAddress,} from "./styled";

const CartPage = () => {

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

  return (
      <CartContainer>
        <Header/>
        <ContainerAddress>
          <PAddress>Endereço de entrega</PAddress>
        </ContainerAddress>
        <p>carrinho vazio</p>
        <ContainerTotal>
          <ContainerH5>
            <H5Styled>SUBTOTAL</H5Styled>
          </ContainerH5>
          <ContainerPrice></ContainerPrice>
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
                value="Cartão de crédito vinicius"
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
