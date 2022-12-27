import styled from '@emotion/styled'
import { NextRouter } from 'next/router'
import { HEADER_HEIGHT } from '../../lib/constants'
import Logo from './Logo'

type HeaderButtonTypes = 'back' | 'home'

export interface HeaderProps {
  router: NextRouter
  title?: string
  left?: HeaderButtonTypes
  right?: HeaderButtonTypes
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

  padding: 8px 18px;

  background-color: #1c1c1e;
`

/**
 * @todo 왼쪽 중앙 오른쪽 필요할 때 구현
 */

const Header = ({ router, title, left, right }: HeaderProps) => {
  return (
    <Wrapper>{['/', '/login'].includes(router.asPath) && <Logo />}</Wrapper>
  )
}

export default Header
