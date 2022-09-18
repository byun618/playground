import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Logo } from '../public'

const Wrapper = styled.div``

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  margin-top: 30px;
`

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-top: 10px;
`

const Header = () => {
  const router = useRouter()

  return (
    <Wrapper>
      <Logo
        onClick={() => {
          router.replace('/')
        }}
      />
      <Title>로그인</Title>
      <SubTitle>놀아보자!</SubTitle>
    </Wrapper>
  )
}

export default Header
