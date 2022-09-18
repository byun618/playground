import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { HEADER_HEIGHT } from '../../lib/constants'
import Button from './Button'
import Logo from './Logo'

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
  border: 1px solid #4c5865;
  border-radius: 20px;

  padding: 8px 20px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`

const Header = () => {
  const router = useRouter()

  return (
    <Wrapper>
      <Logo />
      <Menus>Menu</Menus>
      <LoginButton
        onClick={() => {
          router.push('/login')
        }}
      >
        로그인
      </LoginButton>
    </Wrapper>
  )
}

export default Header
