import { useQuery } from 'react-query'
import { fetchMe } from '../queries/users-me'
import useToken from './useToken'

const useMe = () => {
  const { token } = useToken()

  const { data, isSuccess } = useQuery(['fetchMe', token], fetchMe, {
    enabled: Boolean(token),
  })

  return isSuccess ? data : null
}

export default useMe
