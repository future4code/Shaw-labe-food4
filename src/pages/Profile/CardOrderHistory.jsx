import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/BASE_URL'
import {ContainerOrderHistory} from "./styled"



const CardOrderHistory = (props) => {

    const [orderHistorys, setOrderHistorys] = useState({})

    const getOrderHistory =()=>{
        const headers = {
          headers: {
            auth : localStorage.getItem('token')
          }
        }
        axios
        .get(`${BASE_URL}/orders/history`, headers)
        .then((res)=>{
    
        console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
        }

    useEffect(()=>{
        getOrderHistory()
    },[])


    return (
        <ContainerOrderHistory>
            
        </ContainerOrderHistory>
    )
}
export default CardOrderHistory
