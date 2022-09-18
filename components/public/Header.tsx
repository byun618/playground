import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
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

const Menus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-grow: 1;

  padding: 0 20px;
`

const Button = styled(CustomButton)`
  border: 1px solid #4c5865;
  border-radius: 20px;

  padding: 8px 20px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`

const Header = () => {
  const router = useRouter()

  const { token } = useToken()

  const onClickButton = () => {
    if (token) {
      router.push('/my-page')
    } else {
      router.push('/login')
    }
  }

  return (
    <Wrapper>
      <Logo />
      <Menus>Menu</Menus>
      {token !== undefined && (
        <Button onClick={onClickButton}>
          {token ? '마이 페이지' : '로그인'}
        </Button>
      )}
    </Wrapper>
  )
}

export default Header
