import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  const getData=()=>{
    axios.get(url , {
      headers: {
        auth : localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data.user)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }

  useEffect(() => {
  getData()
  }, [url])

  return [data, getData]
}

export default useRequestData;