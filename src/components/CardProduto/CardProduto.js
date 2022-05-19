import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../global/GlobalContext'
import { goToAddProduct } from '../../router/coordinator'
import { Banner, Botao, Conteudo, MainContainer, Quantia } from './styled'

const CardProduto = (props) => {
  const [mostra,setMostra] = useState(true)
  const [quant,setQuant] = useState(0)
  const navigate = useNavigate()
  const {states, setter} = useContext(GlobalContext)
  const products = states.products

  // console.log(products)

  return (
    <MainContainer>
        <Banner src={props.produto.photoUrl}/>
          {/* <Quantia mostra={mostra}>
            <p></p>
          </Quantia> */}
        <Conteudo>
            <p className='titulo'>{props.produto.name}</p>
            <p>{props.produto.description}</p>
            <p className='preco'>R${props.produto.price.toFixed(2)}</p>
        </Conteudo>
        <Botao onClick={()=>goToAddProduct(navigate,props.restId,props.produto.id)}>adicionar</Botao>
    </MainContainer>
  )
}

export default CardProduto