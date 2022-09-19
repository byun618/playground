import styled from '@emotion/styled'
import { ChangeEventHandler } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { emailState, isValidEmailState } from '../../stores/login'
import Input from '../public/Input'

const Wrapper = styled.div`
  margin-top: 30px;
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
      <Input
        label="이메일"
        warning="올바른 메일 형식으로 입력해주세요."
        type="email"
        value={email ?? ''}
        onChange={onChangeEmail}
        isValid={isValidEmail}
      />
    </Wrapper>
  )
}

export default EmailInput
