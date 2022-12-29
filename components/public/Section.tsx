import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import Button from './Button'
import Image from './Image'
import ArrowRight from '../../assets/png/arrow-right.png'

const ARROW_SIZE = 25

interface HeaderProps {
  children?: ReactNode
  title: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 0 15px 0;

  background: #2c2c2e;
  border-radius: 24px;
`

const Header = styled(Button)<{ isChildren: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 22px ${({ isChildren }) => isChildren && '11px 22px'};

  border-radius: 24px ${({ isChildren }) => isChildren && '24px 0 0'};

  :enabled:active {
    background: rgba(60, 60, 65, 0.5) !important;
  }
`

const HeaderText = styled.div`
  font-weight: 590;
  font-size: 21px;
  line-height: 25px;

  color: #fff;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 12px 24px 12px;
`

const Section = ({ children, title }: HeaderProps) => {
  return (
    <Wrapper>
      <Header
        isChildren={Boolean(children)}
        allowTransform={false}
        onClick={() => {
          //
        }}
      >
        <HeaderText>{title}</HeaderText>
        <Image
          src={ArrowRight}
          alt="arrow-right"
          width={ARROW_SIZE}
          height={ARROW_SIZE}
        />
      </Header>
      {children && <Content>{children}</Content>}
    </Wrapper>
  )
}

export default Section
