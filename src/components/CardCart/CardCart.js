import React, { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext';
import { Banner, Botao, Conteudo, MainContainer, Quantia } from './styled'

const CardCart = (props) => {
  const {states, setter} = useContext(GlobalContext)

  const removeItemFromCart = () => {
    const busca = states.products.findIndex((i)=>i.id === props.produto.id)
    let listProducts = [...states.products];
    if (listProducts[busca].quantity === 1) {
      listProducts.splice(busca, 1);
    } else {
      listProducts[busca].quantity -= 1;
    }
    setter.setProducts(listProducts);
  };

  return (
    <MainContainer>
        <Banner src={props.produto.photoUrl}/>
          <Quantia>
            <p>{props.quantia}</p>
          </Quantia>
        <Conteudo>
            <p className='titulo'>{props.produto.name}</p>
            <p>{props.produto.description}</p>
            <p className='preco'>R${
            ((Number(props.produto.price)*
            Number(props.quantia)).toFixed(2))}</p>
        </Conteudo>
        <Botao onClick={removeItemFromCart}>remover</Botao>
    </MainContainer>
  )
}

export default CardCart