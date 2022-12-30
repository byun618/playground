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
      const message = '로그인에 실패하였습니다'

      /**
       * @todo api 수정후, 다시 적용
       */
      // const errMessage = err.response?.data?.message
      // switch (errMessage) {
      //   case 'INVALID_EMAIL':
      //     message = '이메일 형식이 올바르지 않습니다'
      // }

      alert(message)
    },
  })

  return { login }
}

export default useLogin
