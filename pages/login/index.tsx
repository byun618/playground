import styled from '@emotion/styled'
import type { NextPage } from 'next'
import {
  EmailInput,
  Footer,
  Header,
  PasswordInput,
} from '../../components/login'
import { Page } from '../../components/public'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 100px 0;

  width: 375px;
`

const Login: NextPage = () => {
  return (
    <Page
      noHeader
      style={{
        alignItems: 'center',
      }}
    >
      <Wrapper>
        <Header />
        <EmailInput />
        <PasswordInput />
        <Footer />
      </Wrapper>
    </Page>
  )
}

export default Login
