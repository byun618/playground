import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { Header, MySymbols } from '../../components/my-trade'
import { Page } from '../../components/public'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px 0;

  width: 428px;
  height: 100%;
`

const MyTrade: NextPage = () => {
  return (
    <Page>
      <Wrapper>
        <Header />
        <MySymbols />
      </Wrapper>
    </Page>
  )
}

export default MyTrade
