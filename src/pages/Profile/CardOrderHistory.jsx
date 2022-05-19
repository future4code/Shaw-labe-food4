import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/BASE_URL'
import {ContainerOrderHistory,RestauntName,DatadoPedido,SubTotal} from "./styled"
import Profile from "./Profile";



const CardOrderHistory = (props) => {

    const [orderHistorys, setOrderHistorys] = useState({})
    console.log(orderHistorys.orders)
    const getOrderHistory =()=>{
        const headers = {
          headers: {
            auth : localStorage.getItem('token')
          }
        }
        axios
        .get(`${BASE_URL}/orders/history`, headers)
        .then((res)=>{
          setOrderHistorys(res.data)
        
        })
        .catch((err)=>{
          console.log(err)
        })
        }

    useEffect(()=>{
        getOrderHistory()
    },[])

    const convertDate = (timeStamp)=>{
      let time = new Date(timeStamp)
      let day = time.getDate().toString().padStart(2,'0')
      let month = (time.getMonth()+1).toString().padStart(2,'0')
      let year = time.getFullYear()
  
      return `${day}/${month}/${year}`
  }
  
   
   const mapContainerHistory = orderHistorys.orders && orderHistorys.orders.map((pedido)=>{
     return (<ContainerOrderHistory>
        <RestauntName>{pedido.restaurantName}</RestauntName>
        <DatadoPedido>{convertDate(pedido.createdAt)}</DatadoPedido>
        <SubTotal>Sub Total: {pedido.totalPrice.toFixed(2)}</SubTotal>
     </ContainerOrderHistory>)

   })

    return (
        <>
          {mapContainerHistory}
        </>
    )
}
export default CardOrderHistory
