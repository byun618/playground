import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { EmailInput, LoginButton, PasswordInput } from '../../components/login'
import { Logo, Page } from '../../components/public'

const LogoContainer = styled.div`
  padding-top: 50px;
  padding-left: 19px;
`

const Login: NextPage = () => {
  const router = useRouter()

  return (
    <Page
      header={{
        router,
        title: '로그인',
        left: 'back',
      }}
      full
    >
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <EmailInput />
      <PasswordInput />
      <LoginButton />
    </Page>
  )
}

export default Login
