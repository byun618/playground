import styled from '@emotion/styled'
import { ChangeEventHandler } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { emailState, isValidEmailState } from '../../stores/login'

const Wrapper = styled.div`
  margin-top: 30px;
`

const Label = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 10px;
`

const Input = styled.input<{ isValidEmail: boolean }>`
  width: 100%;

  font-size: 14px;
  line-height: 22px;

  padding: 8px 0 8px 10px;
  margin: 0;

  border: 1px solid
    ${({ isValidEmail }) => (isValidEmail ? '#dfe1e3' : '#f65b65')};

  border-radius: 8px;
  outline: none;

  color: #4c5965;

  :focus {
    border: 1px solid
      ${({ isValidEmail }) => (isValidEmail ? '#4c8fce' : '#f65b65')};
  }
`

const Warning = styled.div<{ isValidEmail: boolean }>`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-top: 5px;

  color: #f65b65;

  ${({ isValidEmail }) =>
    isValidEmail ? 'visibility: hidden;' : 'visibility: visible;'}
`

const EmailInput = () => {
  const [email, setEmail] = useRecoilState(emailState)
  const isValidEmail = useRecoilValue(isValidEmailState)

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setEmail(value)
  }

  return (
    <Wrapper>
      <Label>이메일 주소</Label>
      <Input
        type="email"
        value={email ?? ''}
        onChange={onChangeEmail}
        isValidEmail={isValidEmail}
      />
      <Warning isValidEmail={isValidEmail}>
        올바른 메일 형식으로 입력해주세요.
      </Warning>
    </Wrapper>
  )
}

export default EmailInput
