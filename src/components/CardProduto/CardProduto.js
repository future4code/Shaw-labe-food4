import React from 'react'
import { Banner, Botao, Conteudo, MainContainer } from './styled'

const CardProduto = (props) => {
  return (
    <MainContainer>
        <Banner src={props.produto.photoUrl}/>
        <Conteudo>
            <p className='titulo'>{props.produto.name}</p>
            <p>{props.produto.description}</p>
            <p className='preco'>R${props.produto.price}0</p>
        </Conteudo>
        <Botao>adicionar</Botao>
    </MainContainer>
  )
}

export default CardProduto