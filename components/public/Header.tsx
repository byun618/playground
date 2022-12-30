import styled from '@emotion/styled'
import { NextRouter } from 'next/router'
import { RefObject } from 'react'
import { HEADER_HEIGHT } from '../../lib/constants'
import Button from './Button'
import Logo from './Logo'
import ArrowLeft from '../../assets/png/arrow-left.png'
import Image from './Image'

type HeaderButtonTypes = 'back' | 'home'

export interface HeaderProps {
  router: NextRouter
  headerRef: RefObject<HTMLDivElement>
  title?: string
  left?: HeaderButtonTypes
  right?: HeaderButtonTypes
}

type HeaderButtonProps = {
  rotateDeg?: number
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${HEADER_HEIGHT}px;

  position: fixed;
  overflow: hidden;
  z-index: 999;
  top: -1px;

  padding: 8px 12px;

  background-color: #1c1c1e;
`

const HeaderContent = styled.div`
  min-width: 40px;
  display: flex;
  align-items: center;
`

const Left = styled(HeaderContent)`
  justify-content: flex-start;
`

const Center = styled.div`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  font-size: 17px;
  font-weight: 700;
  text-align: center;

  text-overflow: ellipsis;
  white-space: nowrap;

  padding: 0px 2px;
`

const Right = styled(HeaderContent)`
  justify-content: flex-end;
`

const HeaderButton = styled(Button)<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = ({ router, headerRef, title, left, right }: HeaderProps) => {
  const renderButtons = (type: HeaderButtonTypes) => {
    switch (type) {
      case 'back':
        return (
          <HeaderButton
            onClick={() => {
              router.back()
            }}
          >
            <Image src={ArrowLeft} alt="back" width={30} height={30} />
          </HeaderButton>
        )
    }
  }

  return (
    <Wrapper ref={headerRef}>
      {router.asPath === '/' ? (
        <Logo />
      ) : (
        <>
          <Left>{left && renderButtons(left)}</Left>
          <Center>{title}</Center>
          <Right>{right && renderButtons(right)}</Right>
        </>
      )}
    </Wrapper>
  )
}

export default Header
