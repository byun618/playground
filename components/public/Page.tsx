import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import Header from './Header'

interface PageProps {
  children: ReactNode
}

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-color: #f5f5f5;
`

const Page = (pageProps: PageProps) => {
  const { children } = pageProps

  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Page
