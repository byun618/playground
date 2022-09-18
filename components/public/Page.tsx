import styled from '@emotion/styled'
import type { CSSProperties, ReactNode } from 'react'
import Header from './Header'

interface PageProps {
  children: ReactNode
  noHeader?: boolean
  backgroundColor?: string
  style?: CSSProperties
}

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

const Content = styled.div<Partial<PageProps>>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-color: ${({ backgroundColor }) => backgroundColor};
`

const Page = (pageProps: PageProps) => {
  const {
    children,
    noHeader = false,
    backgroundColor = '#ffffff',
    style,
  } = pageProps

  return (
    <Wrapper>
      {!noHeader && <Header />}
      <Content style={style} backgroundColor={backgroundColor}>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Page
