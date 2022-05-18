import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToBack } from '../../router/coordinator'
import { Background, MainContainer } from './styled'

const ModalQuantia = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [form, onChange, clear] = useForm({quantity: ""});

  const placeOrder = (event) =>{
    event.preventDefault()
    clear()
    goToBack(navigate)
  }
  
  return (
    <Background>
      <MainContainer>
        <p>Selecione a quantia desejada</p>
        <form onSubmit={placeOrder}>
          <input
            name="quantity"
            value={form.quantity}
            placeholder='0'
            type='number'
            onChange={onChange}
          />
          <button>ADICIONAR AO CARRINHO</button>
        </form>
      </MainContainer>
    </Background>
  )
}

export default ModalQuantia