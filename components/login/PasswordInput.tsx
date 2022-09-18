import styled from '@emotion/styled'
import { ChangeEventHandler } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isValidPasswordState, passwordState } from '../../stores/login'

const Wrapper = styled.div`
  margin-top: 10px;
`

const Label = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 10px;
`

const Input = styled.input<{ isValidPassword: boolean }>`
  width: 100%;

  font-size: 14px;
  line-height: 22px;

  padding: 8px 0 8px 10px;
  margin: 0;

  border: 1px solid
    ${({ isValidPassword }) => (isValidPassword ? '#dfe1e3' : '#f65b65')};

  border-radius: 8px;
  outline: none;

  color: #4c5965;

  :focus {
    border: 1px solid
      ${({ isValidPassword }) => (isValidPassword ? '#4c8fce' : '#f65b65')};
  }
`

const Warning = styled.div<{ isValidPassword: boolean }>`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-top: 5px;

  color: #f65b65;

  ${({ isValidPassword }) =>
    isValidPassword ? 'visibility: hidden;' : 'visibility: visible;'}
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
      <Label>비밀번호</Label>
      <Input
        type="password"
        value={password ?? ''}
        onChange={onChangePassword}
        isValidPassword={isValidPassword}
      />
      <Warning isValidPassword={isValidPassword}>
        비밀번호를 입력해주세요.
      </Warning>
    </Wrapper>
  )
}

export default PasswordInput
