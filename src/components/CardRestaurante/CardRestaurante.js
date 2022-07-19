import React from 'react'
import { Banner, Botao, Conteudo, MainContainer } from './styled'

const CardRestaurante = (props) => {

  return (
    <MainContainer onClick={props.Entrar}>
        <Banner src={props.logo}/>
        <Conteudo>
            <p className='titulo'>{props.nome}</p>
            
            <p>Frete: R${props.shipping}</p>
            <p>{(props.deliveryTime)} min</p>
            {/* <p className='preco'>R${props.restaurante.price}0</p> */}
        </Conteudo>
    </MainContainer>
  )
}

export default CardRestaurante