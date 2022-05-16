import { goToHome } from '../router/coordinator'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useUnProtectedPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToHome(navigate)
    }
  }, [navigate])
}

export default useUnProtectedPage;
