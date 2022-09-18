import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { Header, LogoutButton } from '../../components/my-page'
import { Page } from '../../components/public'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;

  padding: 30px 0;

  width: 375px;
  height: 100%;
`

const MyPage: NextPage = () => {
  return (
    <Page
      style={{
        alignItems: 'center',
      }}
    >
      <Wrapper>
        <Header />
        <div
          style={{
            flexGrow: 1,
          }}
        ></div>
        <LogoutButton />
      </Wrapper>
    </Page>
  )
}

export default MyPage
