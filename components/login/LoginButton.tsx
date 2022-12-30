import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import useLogin from '../../hooks/useLogin'
import {
  emailState,
  isAbleToLoginState,
  passwordState,
} from '../../stores/login'
import { Button } from '../public'

const Wrapper = styled(Button)`
  display: flex;
  justify-content: center;

  margin: 28px 17.5px;
  padding: 15.5px 147.5px;

  background: #3c3c41;
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  :disabled {
    background: rgba(51, 51, 51, 0.8);
    color: rgba(255, 255, 255, 0.3);
  }
`

const LoginButton = () => {
  const email = useRecoilValue(emailState)
  const password = useRecoilValue(passwordState)

  const isAbleToLogin = useRecoilValue(isAbleToLoginState)

  const { login } = useLogin()

  const onClick = () => {
    login.mutate({ email, password })
  }

  return (
    <Wrapper onClick={onClick} disabled={!isAbleToLogin}>
      로그인
    </Wrapper>
  )
}

export default LoginButton
