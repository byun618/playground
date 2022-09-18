import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { isAbleToLoginState } from '../../stores/login'
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
  const isAbleToLogin = useRecoilValue(isAbleToLoginState)

  return (
    <Wrapper>
      <LoginButton
        onClick={() => {
          console.log(1)
        }}
        disabled={!isAbleToLogin}
      >
        로그인
      </LoginButton>
    </Wrapper>
  )
}

export default Footer
