import styled from '@emotion/styled'

interface CryptoPriceRateProps {
  price: number
  rate: number
  diff: number
}

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

const Rate = styled.div<{ decrease: boolean }>`
  font-weight: 510;
  font-size: 12px;
  line-height: 14px;

  color: ${({ decrease }) => (decrease ? '#d54155' : '#62c278')};
`

const CryptoPriceRate = ({
  price = 0,
  rate = 0,
  diff = 0,
}: CryptoPriceRateProps) => {
  const transformNumber = (number: number) => {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <Wrapper>
      <Price>{transformNumber(price)}$</Price>
      <Rate decrease={diff < 0 && rate < 0}>
        {transformNumber(diff)}({transformNumber(rate)}
        %)
      </Rate>
    </Wrapper>
  )
}

export default CryptoPriceRate
