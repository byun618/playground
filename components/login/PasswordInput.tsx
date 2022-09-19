import styled from '@emotion/styled'
import { ChangeEventHandler, KeyboardEventHandler } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isValidPasswordState, passwordState } from '../../stores/login'
import Input from '../public/Input'

const Wrapper = styled.div`
  margin-top: 10px;
`

const PasswordInput = () => {
  const [password, setPassword] = useRecoilState(passwordState)
  const isValidPassword = useRecoilValue(isValidPasswordState)

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setPassword(value)
  }

  return (
    <Wrapper>
      <Input
        label="비밀번호"
        warning="비밀번호를 입력해주세요."
        type="password"
        value={password ?? ''}
        onChange={onChangePassword}
        isValid={isValidPassword}
      />
    </Wrapper>
  )
}

export default PasswordInput
