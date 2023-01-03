import { useQuery } from 'react-query'
import { fetchMe, Me } from '../queries/users-me'
import useToken from './useToken'

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
