import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import useMe from '../../hooks/useMe'
import useToken from '../../hooks/useToken'
import { HEADER_HEIGHT } from '../../lib/constants'
import CustomButton from './Button'
import Logo from './Logo'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 50px 0 50px;

  width: 100%;
  height: ${HEADER_HEIGHT}px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-grow: 1;

  padding: 0 20px;

  & > :not(:first-of-type) {
    margin-left: 20px;
  }
`

const Button = styled(CustomButton)`
  border: 1px solid #4c5865;
  border-radius: 20px;

  padding: 8px 20px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`

const MenuButton = styled(CustomButton)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #4c5965;
`

const Header = () => {
  const router = useRouter()

  const menu = [
    {
      text: 'About Me',
      onClick: () => {
        console.log(1)
      },
    },
    {
      text: 'My Trade',
      onClick: () => {
        router.push('/my-trade')
      },
    },
  ]

  const { token } = useToken()
  const me = useMe()

  const onClickButton = () => {
    if (me) {
      router.push('/my-page')
    } else {
      router.push('/login')
    }
  }

  return (
    <Wrapper>
      <Logo />
      <Menu>
        {menu.map(({ text, onClick }, index) => (
          <div key={index}>
            <MenuButton onClick={onClick}>{text}</MenuButton>
          </div>
        ))}
      </Menu>
      {token !== undefined && (
        <Button onClick={onClickButton}>{me ? '마이 페이지' : '로그인'}</Button>
      )}
    </Wrapper>
  )
}

export default Header
