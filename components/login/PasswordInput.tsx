import styled from '@emotion/styled'
import { ChangeEventHandler, KeyboardEventHandler, useEffect } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import useLogin from '../../hooks/useLogin'
import {
  emailState,
  isValidPasswordState,
  passwordState,
} from '../../stores/login'
import Input from '../public/Input'

const Wrapper = styled.div`
  padding: 15px 24px 0 24px;
`

const PasswordInput = () => {
  const { login } = useLogin()

  const email = useRecoilValue(emailState)
  const [password, setPassword] = useRecoilState(passwordState)
  const resetPassword = useResetRecoilState(passwordState)
  const isValidPassword = useRecoilValue(isValidPasswordState)

  useEffect(() => {
    resetPassword()
  }, [])

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setPassword(value)
  }

  const onKeyUpEnter: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
    if (key === 'Enter') {
      login.mutate({ email, password })
    }
  }

  return (
    <Wrapper>
      <Input
        label="비밀번호"
        warning="비밀번호를 입력해주세요."
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password ?? ''}
        onChange={onChangePassword}
        onKeyUp={onKeyUpEnter}
        isValid={isValidPassword}
      />
    </Wrapper>
  )
}

export default PasswordInput
