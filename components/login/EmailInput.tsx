import styled from '@emotion/styled'
import { ChangeEventHandler, useEffect } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { emailState, isValidEmailState } from '../../stores/login'
import Input from '../public/Input'

const Wrapper = styled.div`
  padding: 59px 24px 0 24px;
`

const EmailInput = () => {
  const [email, setEmail] = useRecoilState(emailState)
  const resetEmail = useResetRecoilState(emailState)
  const isValidEmail = useRecoilValue(isValidEmailState)

  useEffect(() => {
    resetEmail()
  }, [])

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
        placeholder="이메일을 입력해주세요"
        value={email ?? ''}
        onChange={onChangeEmail}
        isValid={isValidEmail}
      />
    </Wrapper>
  )
}

export default EmailInput
