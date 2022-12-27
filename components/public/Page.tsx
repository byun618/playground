import styled from '@emotion/styled'
import { ReactNode, useRef } from 'react'
import { Header } from '.'
import { HEADER_HEIGHT } from '../../lib/constants'
import { HeaderProps } from './Header'

interface PageProps {
  children: ReactNode
  header?: HeaderProps
  backgroundColor?: string
}

type ContentProps = Partial<PageProps> & { headerHeight: number }

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  /**
   * @todo 필요시, full 옵션 추가
   */
  padding: 16px 16px;
  margin-top: ${({ headerHeight }) => headerHeight}px;
`

const Page = (pageProps: PageProps) => {
  const { children, header } = pageProps

  const headerRef = useRef<HTMLInputElement>(null)

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
      <Content
        headerHeight={
          header ? headerRef.current?.clientHeight ?? HEADER_HEIGHT : 0
        }
      >
        {children}
      </Content>
    </Wrapper>
  )
}

export default Page
