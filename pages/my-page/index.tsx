import styled from '@emotion/styled'
import type { NextPage } from 'next'
import {
  Header,
  LoginInfo,
  LogoutButton,
  PhoneInfo,
} from '../../components/my-page'
import { Page } from '../../components/public'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;

  padding: 30px 0;

  width: 375px;
  height: 100%;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const MyPage: NextPage = () => {
  return (
    <Page>
      <Wrapper>
        <Header />
        <Contents>
          <LoginInfo />
          <PhoneInfo />
        </Contents>
        <LogoutButton />
      </Wrapper>
    </Page>
  )
}

export default MyPage
