import { ColorLensOutlined } from '@material-ui/icons'
import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../global/GlobalContext'
import useForm from '../../hooks/useForm'
import { goToBack } from '../../router/coordinator'
import { Background, MainContainer } from './styled'

const ModalQuantia = (props) => {
  const navigate = useNavigate()
  const params = useParams()
  const [form, onChange, clear] = useForm({quantity: ''});
  const {states, setter} = useContext(GlobalContext)
  setter.setIdRest(params.id)
  const setProducts = setter.setProducts
  const products = states.products
  console.log(products)

  const filtro = props.produtos.filter((produto)=>{
    return produto.id === params.produto
  })

  const addProduct = (event) =>{
    event.preventDefault()
    const busca = states.products.findIndex((i)=>i.id === params.produto)
    let listProducts = [...products]
    if(busca === -1 ){
      listProducts.push({
        quantity:Number(form.quantity), 
        produto:filtro,
        id:params.produto}
        )
    }else{
      listProducts[busca].quantity += Number(form.quantity);
    }
    setProducts(listProducts)
    clear()
    goToBack(navigate)
  }
  return (
    <Background>
      <MainContainer>
        <p>Selecione a quantia desejada</p>
        <form onSubmit={addProduct}>
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