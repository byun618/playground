import { useQuery } from 'react-query'
import { fetchMe } from '../queries/users-me'
import useToken from './useToken'

interface Me {
  id: number
  email: string
  name?: string
  phone?: string
}

const useMe = () => {
  const { token } = useToken()

  const { data, isSuccess, error } = useQuery<Me>(['fetchMe', token], fetchMe, {
    enabled: Boolean(token),
  })

  if (error) {
    window.localStorage.removeItem('token')
  }

  return isSuccess ? data : null
}

export default useMe
