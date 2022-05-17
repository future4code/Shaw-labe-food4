import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAddProduct } from '../../router/coordinator'
import { Banner, Botao, Conteudo, MainContainer } from './styled'

const CardProduto = (props) => {
  const navigate = useNavigate()
  return (
    <MainContainer>
        <Banner src={props.produto.photoUrl}/>
        <Conteudo>
            <p className='titulo'>{props.produto.name}</p>
            <p>{props.produto.description}</p>
            <p className='preco'>R${props.produto.price}0</p>
        </Conteudo>
        <Botao onClick={()=>goToAddProduct(navigate,props.restId,props.produto.id)}>adicionar</Botao>
    </MainContainer>
  )
}

export default CardProduto