import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import Button from './Button'
import Image from './Image'
import Arrow from '../../assets/png/arrow.png'

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

  padding: 24px 22px ${({ isChildren }) => isChildren && '0 22px'};

  border-radius: 24px ${({ isChildren }) => isChildren && '24px 0 0'};

  :enabled:active {
    background: rgba(97, 98, 109, 0.3) !important;
  }
`

const HeaderText = styled.div`
  font-weight: 590;
  font-size: 21px;
  line-height: 25px;

  color: #fff;
`

const Section = ({ children, title }: HeaderProps) => {
  return (
    <Wrapper>
      <Header isChildren={Boolean(children)} allowTransform={false}>
        <HeaderText>{title}</HeaderText>
        <Button>
          <Image
            src={Arrow}
            alt="arrow"
            width={ARROW_SIZE}
            height={ARROW_SIZE}
          />
        </Button>
      </Header>
      {children}
    </Wrapper>
  )
}

export default Section
