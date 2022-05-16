import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/BASE_URL';

const Restaurante = () => {
  const [listRest,setListRest] = useState()
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1aEE1U0VyY0Q0ZzJYSVhxb01qIiwibmFtZSI6IlBhYmxvIiwiZW1haWwiOiJwYWJsb0BvaS5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xOCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTI3MjQ5MDl9.fPCYPmYhhktxwzCFT0qC92lCq41MwbarBcISKWCBM0w"

  const pegaRest = () => {
    axios.get(`${BASE_URL}/restaurants`,{headers:{auth:token}})
    .then((response) => {
      setListRest(response.data)
      console.log(response.data)
    }).catch((error) => {
    });
  };

  useEffect(()=>{
    pegaRest()
  },[])


  return (
    <div>Restaurante</div>
  )
}
export default Restaurante