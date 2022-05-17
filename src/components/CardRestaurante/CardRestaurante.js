import React from 'react'
import { Banner, Botao, Conteudo, MainContainer } from './styled'

const CardRestaurante = (props) => {
    console.log(props)
  return (
    <MainContainer>
        <Banner src={props.logo}/>
        <Conteudo>
            <p className='titulo'>{props.nome}</p>
            Oiieieieiee
            {/* <p>{props.restaurante.description}</p> */}
            {/* <p className='preco'>R${props.restaurante.price}0</p> */}
        </Conteudo>
        <Botao>adicionar</Botao>
    </MainContainer>
  )
}

export default CardRestaurante