import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-align: right;
  color: #b0b5bb;

  flex-grow: 1;
`

const Price = styled.div`
  font-weight: 590;
  font-size: 15px;
  line-height: 18px;
`

const Rate = styled.div`
  font-weight: 510;
  font-size: 12px;
  line-height: 14px;
`

const CryptoPriceRate = () => {
  return (
    <Wrapper>
      <Price>12,000원</Price>
      <Rate>-120(9.2%)</Rate>
    </Wrapper>
  )
}

export default CryptoPriceRate
