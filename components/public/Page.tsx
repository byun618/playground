import styled from '@emotion/styled'
import type { CSSProperties, ReactNode } from 'react'
import { Header } from '.'
import { HeaderProps } from './Header'

interface PageProps {
  children: ReactNode
  header?: HeaderProps
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
  const { children, header, backgroundColor = '#1c1c1e', style } = pageProps

  return (
    <Wrapper>
      {header && (
        <Header
          router={header.router}
          title={header.title}
          left={header.left}
          right={header.right}
        />
      )}
      <Content style={style} backgroundColor={backgroundColor}>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Page
