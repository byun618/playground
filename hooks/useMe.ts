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

  const { data, isSuccess } = useQuery<Me>(['fetchMe', token], fetchMe, {
    enabled: Boolean(token),
  })

  return isSuccess ? data : null
}

export default useMe
