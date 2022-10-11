import styled from '@emotion/styled'
import { Button } from '../public'

const Wrapper = styled.div`
  display: flex;

  align-items: center;
`

const Title = styled.div`
  flex-grow: 1;

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`

const AddButton = styled(Button)`
  padding: 5px 12px;
  border-radius: 15px;

  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  background-color: #b72e39;
`

const Header = () => {
  return (
    <Wrapper>
      <Title>내 주식</Title>
      <AddButton>추가하기</AddButton>
    </Wrapper>
  )
}

export default Header
