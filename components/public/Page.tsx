import styled from '@emotion/styled'
import { ReactNode, useRef } from 'react'
import { Header } from '.'
import { HEADER_HEIGHT } from '../../lib/constants'
import { HeaderProps } from './Header'

interface PageProps {
  children: ReactNode
  header?: Omit<HeaderProps, 'headerRef'>
  full?: boolean
  backgroundColor?: string
}

type ContentProps = Partial<PageProps> & { headerHeight: number }

const Wrapper = styled.div`
  min-width: 100vw;
  /**
   * @todo 상대적으로 변경하기
   */
  min-height: 664px;

  display: flex;
  flex-direction: column;
`

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: ${({ full }) => (full ? '0' : '16px')};
  margin-top: ${({ headerHeight }) => headerHeight}px;
`

const Page = (pageProps: PageProps) => {
  const { children, header, full } = pageProps

  const headerRef = useRef<HTMLDivElement>(null)

  return (
    <Wrapper>
      {header && (
        <Header
          router={header.router}
          headerRef={headerRef}
          title={header.title}
          left={header.left}
          right={header.right}
        />
      )}
      <Content
        headerHeight={
          header ? headerRef.current?.clientHeight ?? HEADER_HEIGHT : 0
        }
        full={full}
      >
        {children}
      </Content>
    </Wrapper>
  )
}

export default Page
