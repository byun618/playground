import styled from '@emotion/styled'
import { Button } from '../public'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 30px;
`

const LoginButton = styled(Button)`
  padding: 8px 15px;
  background-color: #b72e39;
  border-radius: 8px;

  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;
`

const Footer = () => {
  return (
    <Wrapper>
      <LoginButton
        onClick={() => {
          console.log(1)
        }}
      >
        로그인
      </LoginButton>
    </Wrapper>
  )
}

export default Footer
