import styled from '@emotion/styled'

const Wrapper = styled.div``

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  // margin-top: 30px;
`

const Header = () => {
  return (
    <Wrapper>
      <Title>마이 페이지</Title>
    </Wrapper>
  )
}

export default Header
