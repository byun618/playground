import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import LetsPlay from '../../assets/png/lets-play.png'
import { Button, Image } from '../public'

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 162px;

  flex-grow: 1;
`

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 40px;
`

const LoginButton = styled(Button)`
  font-weight: 590;
  font-size: 14px;
  line-height: 17px;

  text-decoration-line: underline;

  color: #ffffff;
`

const NotLogin = () => {
  const router = useRouter()

  return (
    <>
      <ImageContainer>
        <Image src={LetsPlay} alt="lets-play" width={140} height={32} />
      </ImageContainer>
      <LoginButtonContainer>
        <LoginButton
          onClick={() => {
            router.push('/login')
          }}
        >
          로그인 하기
        </LoginButton>
      </LoginButtonContainer>
    </>
  )
}

export default NotLogin
