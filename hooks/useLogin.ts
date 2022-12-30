import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { postLogin } from '../queries/login'
import useToken from './useToken'

const useLogin = () => {
  const router = useRouter()

  const { storeToken } = useToken()

  const login = useMutation(postLogin, {
    onSuccess: (token) => {
      storeToken(token)

      router.replace('/')
    },
    onError: (err: any) => {
      alert(err.message)
    },
  })

  return { login }
}

export default useLogin
