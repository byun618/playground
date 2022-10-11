import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;

  background: linear-gradient(
    90deg,
    rgba(246, 246, 246, 0) 0%,
    rgba(246, 246, 246, 0.3) 3%,
    #f6f6f6 50%,
    rgba(246, 246, 246, 0.3) 97%,
    rgba(246, 246, 246, 0) 100%
  );

  height: 200px;

  margin-top: 20px;
  padding-top: 30px;
`

const Test = styled.div`
  width: 100px;
  height: 70px;

  background: #fff;

  border: 1px solid #dddddf;
`

const MySymbols = () => {
  return (
    <Wrapper>
      <Test />
    </Wrapper>
  )
}

export default MySymbols
