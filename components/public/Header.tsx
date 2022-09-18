import styled from '@emotion/styled'
import { HEADER_HEIGHT } from '../../lib/constants'
import Image from './Image'
import Logo from '../../assets/png/logo.png'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 50px 0 50px;

  width: 100%;
  height: ${HEADER_HEIGHT}px;
`

const Menus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-grow: 1;

  padding: 0 20px;
`

const LoginButton = styled(Button)`
  border: 1px solid #333333;
  border-radius: 20px;

  padding: 8px 20px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #333333;
`

const Header = () => {
  return (
    <Wrapper>
      <Image src={Logo} width={205} height={32} alt="logo" />
      <Menus>Menu</Menus>
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

export default Header
