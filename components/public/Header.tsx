import styled from '@emotion/styled'
import { HEADER_HEIGHT } from '../../lib/constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: ${HEADER_HEIGHT}px;

  // 제거 예정
  border: 1px solid red;
`

const Header = () => {
  return <Wrapper>Header</Wrapper>
}

export default Header
