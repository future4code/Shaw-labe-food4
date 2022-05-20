import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../global/GlobalContext'
import { goToAddProduct } from '../../router/coordinator'
import { Banner, Botao, Conteudo, MainContainer, Quantia } from './styled'

const CardProduto = (props) => {
  const [quant,setQuant] = useState(0)
  const navigate = useNavigate()
  const {states, setter} = useContext(GlobalContext)
  const products = states.products

  const busca = states.products.findIndex((i)=>i.id === props.produto.id)
  console.log(busca)

  const removeItemFromCart = () => {
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
        {products && busca !== -1 ? 
          <Quantia>
            <p>{products[busca].quantity}</p>
          </Quantia> : null}
        <Conteudo>
            <p className='titulo'>{props.produto.name}</p>
            <p>{props.produto.description}</p>
            <p className='preco'>R${props.produto.price.toFixed(2)}</p>
        </Conteudo>
        {products && busca !== -1 ? 
        <Botao onClick={removeItemFromCart} className='remove'>remover</Botao> : 
        <Botao onClick={()=>goToAddProduct(navigate,props.restId,props.produto.id)}>adicionar</Botao>
        }
    </MainContainer>
  )
}

export default CardProduto