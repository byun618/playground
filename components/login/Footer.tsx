import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import useToken from '../../hooks/useToken'
import api from '../../lib/api'
import {
  emailState,
  isAbleToLoginState,
  passwordState,
} from '../../stores/login'
import { Button } from '../public'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 30px;
`

const LoginButton = styled(Button)<{ disabled: boolean }>`
  padding: 8px 15px;
  border-radius: 8px;

  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  background-color: ${({ disabled }) =>
    disabled ? '#888888' : '#b72e39'} !important;
`

const Footer = () => {
  const router = useRouter()

  const isAbleToLogin = useRecoilValue(isAbleToLoginState)
  const email = useRecoilValue(emailState)
  const password = useRecoilValue(passwordState)
  const { storeToken } = useToken()

  const onClickLogin = async () => {
    try {
      const { data } = await api.post<{ access_token: string }>('/auth/login', {
        email,
        password,
      })

      storeToken(data.access_token)

      router.replace('/')
    } catch (err: any) {
      alert(err.response.data.message)
    }
  }

  return (
    <Wrapper>
      <LoginButton onClick={onClickLogin} disabled={!isAbleToLogin}>
        로그인
      </LoginButton>
    </Wrapper>
  )
}

export default Footer
