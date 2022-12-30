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
      const errMessage = err.response?.data?.message

      let message = '로그인에 실패하였습니다'
      switch (errMessage) {
        case 'invalid email':
          message = '이메일 형식이 올바르지 않습니다'
          break

        case 'invalid password':
          message = '비밀번호가 올바르지 않습니다'
          break
      }

      alert(message)
    },
  })

  return { login }
}

export default useLogin
