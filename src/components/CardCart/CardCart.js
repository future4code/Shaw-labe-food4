import React from 'react'
import { Banner, Botao, Conteudo, MainContainer, Quantia } from './styled'

const CardCart = (props) => {
  return (
    <MainContainer>
        <Banner src={props.produto.photoUrl}/>
          <Quantia>
            <p>{props.quantia}</p>
          </Quantia>
        <Conteudo>
            <p className='titulo'>{props.produto.name}</p>
            <p>{props.produto.description}</p>
            <p className='preco'>R${(props.produto.price*props.quantia).toFixed(1)}0</p>
        </Conteudo>
        <Botao>remover</Botao>
    </MainContainer>
  )
}

export default CardCart